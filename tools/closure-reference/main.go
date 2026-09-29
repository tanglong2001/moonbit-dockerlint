package main

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"github.com/moby/buildkit/client/llb/sourceresolver"
	"github.com/moby/buildkit/frontend/dockerfile/dockerfile2llb"
	"github.com/moby/buildkit/frontend/dockerui"
	"github.com/moby/buildkit/solver/pb"
	digest "github.com/opencontainers/go-digest"
	"google.golang.org/protobuf/proto"
)

type imageProfileFile struct {
	Name              string   `json:"name"`
	Reference         string   `json:"reference"`
	Platform          string   `json:"platform"`
	PinnedIndexDigest string   `json:"pinnedIndexDigest"`
	ConfigDigest      string   `json:"configDigest"`
	ConfigFile        string   `json:"configFile"`
	ConfigSHA256      string   `json:"configSha256"`
	OnBuild           []string `json:"onbuild"`
}
type imageProfileSet struct {
	Format   string             `json:"format"`
	Platform string             `json:"platform"`
	Images   []imageProfileFile `json:"images"`
}
type imageProfileSummary struct {
	Name              string `json:"name"`
	Reference         string `json:"reference"`
	PinnedIndexDigest string `json:"pinned_index_digest"`
	Platform          string `json:"platform"`
	ConfigDigest      string `json:"config_digest"`
	OnBuildCount      int    `json:"onbuild_count"`
}
type resolvedImageConfig struct {
	config  []byte
	digest  digest.Digest
	profile imageProfileSummary
}
type metadataResolver struct {
	profiles map[string]resolvedImageConfig
	strict   bool
}

func loadMetadataResolver(path string) (metadataResolver, string, string, []imageProfileSummary, error) {
	if path == "" {
		return metadataResolver{}, "fake Linux/amd64 image config and dummy rootfs; no registry metadata; Config.OnBuild empty", "", nil, nil
	}
	profileBytes, err := os.ReadFile(path)
	if err != nil {
		return metadataResolver{}, "", "", nil, err
	}
	var set imageProfileSet
	if err := json.Unmarshal(profileBytes, &set); err != nil {
		return metadataResolver{}, "", "", nil, err
	}
	if set.Format != "dockerlint-image-profile/1" || set.Platform != "linux/amd64" || len(set.Images) == 0 {
		return metadataResolver{}, "", "", nil, fmt.Errorf("unsupported or incomplete image profile")
	}
	sum := sha256.Sum256(profileBytes)
	profileHash := hex.EncodeToString(sum[:])
	resolver := metadataResolver{profiles: map[string]resolvedImageConfig{}, strict: true}
	summaries := make([]imageProfileSummary, 0, len(set.Images))
	profileDir := filepath.Dir(path)
	for _, image := range set.Images {
		if image.Name == "" || image.Platform != set.Platform || !strings.HasPrefix(image.PinnedIndexDigest, "sha256:") || !strings.HasPrefix(image.ConfigDigest, "sha256:") {
			return metadataResolver{}, "", "", nil, fmt.Errorf("invalid image profile identity: %q", image.Name)
		}
		if filepath.Base(image.ConfigFile) != image.ConfigFile || image.ConfigFile == "." || image.ConfigFile == "" {
			return metadataResolver{}, "", "", nil, fmt.Errorf("image config file must be a profile-local basename")
		}
		configBytes, err := os.ReadFile(filepath.Join(profileDir, image.ConfigFile))
		if err != nil {
			return metadataResolver{}, "", "", nil, err
		}
		configHash := sha256.Sum256(configBytes)
		actualHash := hex.EncodeToString(configHash[:])
		if actualHash != image.ConfigSHA256 || "sha256:"+actualHash != image.ConfigDigest {
			return metadataResolver{}, "", "", nil, fmt.Errorf("image config hash mismatch: %s", image.Name)
		}
		var raw struct {
			OS           string `json:"os"`
			Architecture string `json:"architecture"`
			Config       struct {
				OnBuild []string `json:"OnBuild"`
			} `json:"config"`
		}
		if err := json.Unmarshal(configBytes, &raw); err != nil {
			return metadataResolver{}, "", "", nil, err
		}
		if raw.OS != "linux" || raw.Architecture != "amd64" || strings.Join(raw.Config.OnBuild, "\x00") != strings.Join(image.OnBuild, "\x00") {
			return metadataResolver{}, "", "", nil, fmt.Errorf("image config profile mismatch: %s", image.Name)
		}
		if _, exists := resolver.profiles[image.PinnedIndexDigest]; exists {
			return metadataResolver{}, "", "", nil, fmt.Errorf("duplicate pinned image digest: %s", image.PinnedIndexDigest)
		}
		profile := imageProfileSummary{
			Name: image.Name, Reference: image.Reference, PinnedIndexDigest: image.PinnedIndexDigest,
			Platform: image.Platform, ConfigDigest: image.ConfigDigest, OnBuildCount: len(raw.Config.OnBuild),
		}
		resolver.profiles[image.PinnedIndexDigest] = resolvedImageConfig{config: configBytes, digest: digest.Digest(image.ConfigDigest), profile: profile}
		summaries = append(summaries, profile)
	}
	return resolver, "exact linux/amd64 image config blobs from pinned OCI manifests; no daemon/build", profileHash, summaries, nil
}

func (resolver metadataResolver) ResolveImageConfig(ctx context.Context, ref string, opt sourceresolver.Opt) (string, digest.Digest, []byte, error) {
	if resolver.strict {
		for pinned, image := range resolver.profiles {
			if strings.HasSuffix(ref, pinned) {
				return ref, image.digest, image.config, nil
			}
		}
		return ref, "", nil, fmt.Errorf("no exact image profile for %q", ref)
	}
	// Deliberately fake config: enough for Dockerfile-to-LLB conversion, no external ONBUILD.
	config := map[string]any{
		"architecture": "amd64",
		"os":           "linux",
		"config":       map[string]any{"Env": []string{"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"}},
		"rootfs":       map[string]any{"type": "layers", "diff_ids": []string{"sha256:" + strings.Repeat("0", 64)}},
	}
	b, err := json.Marshal(config)
	return ref, "", b, err
}

type stageInfo struct {
	Index        int    `json:"index"`
	Name         string `json:"name"`
	Base         string `json:"base"`
	Default      bool   `json:"default"`
	ConfigTarget string `json:"config_target"`
}
type targetResult struct {
	Target         stageInfo           `json:"target"`
	Vertices       int                 `json:"llb_vertices"`
	Closure        []string            `json:"stage_closure"`
	Operations     map[string][]string `json:"stage_operations"`
	RawCustomNames []string            `json:"raw_custom_names"`
	FileCopies     []fileCopySummary   `json:"file_copies"`
}
type fileCopySummary struct {
	Source      string `json:"source"`
	Destination string `json:"destination"`
}
type report struct {
	BuildKit         string                `json:"buildkit"`
	SourceSHA256     string                `json:"source_sha256"`
	Resolver         string                `json:"resolver"`
	ProfileSetSHA256 string                `json:"profile_set_sha256,omitempty"`
	BuildArgs        map[string]string     `json:"build_args,omitempty"`
	ImageProfiles    []imageProfileSummary `json:"image_profiles,omitempty"`
	StageTargets     []stageInfo           `json:"stage_targets"`
	Targets          []targetResult        `json:"targets"`
}

func main() {
	profilePath := ""
	dockerfilePath := ""
	buildArgs := map[string]string{}
	for i := 1; i < len(os.Args); i++ {
		if os.Args[i] == "--profiles" {
			i++
			if i >= len(os.Args) || profilePath != "" {
				panic("usage: oracle [--profiles profiles.json] Dockerfile")
			}
			profilePath = os.Args[i]
		} else if os.Args[i] == "--build-arg" {
			i++
			if i >= len(os.Args) {
				panic("usage: oracle [--profiles profiles.json] [--build-arg KEY=VALUE] Dockerfile")
			}
			key, value, ok := strings.Cut(os.Args[i], "=")
			if !ok || key == "" {
				panic("build argument must be KEY=VALUE")
			}
			if _, exists := buildArgs[key]; exists {
				panic("duplicate build argument: " + key)
			}
			buildArgs[key] = value
		} else if strings.HasPrefix(os.Args[i], "-") || dockerfilePath != "" {
			panic("usage: oracle [--profiles profiles.json] [--build-arg KEY=VALUE] Dockerfile")
		} else {
			dockerfilePath = os.Args[i]
		}
	}
	if dockerfilePath == "" {
		panic("usage: oracle [--profiles profiles.json] Dockerfile")
	}
	data, err := os.ReadFile(dockerfilePath)
	if err != nil {
		panic(err)
	}
	resolver, resolverDescription, profileHash, profiles, err := loadMetadataResolver(profilePath)
	if err != nil {
		panic(err)
	}
	ctx := context.Background()
	listed, err := dockerfile2llb.ListTargets(ctx, data)
	if err != nil {
		panic(err)
	}
	stageTargets := make([]stageInfo, len(listed.Targets))
	known := map[string]struct{}{}
	for i, t := range listed.Targets {
		name := t.Name
		if name == "" {
			name = fmt.Sprintf("stage-%d", i)
		}
		targetArg := t.Name // empty means BuildKit's default final target
		stageTargets[i] = stageInfo{Index: i, Name: name, Base: t.Base, Default: t.Default, ConfigTarget: targetArg}
		known[strings.ToLower(name)] = struct{}{}
	}
	out := report{BuildKit: "moby/buildkit v0.25.1", Resolver: resolverDescription, ProfileSetSHA256: profileHash, BuildArgs: buildArgs, ImageProfiles: profiles, StageTargets: stageTargets}
	sum := sha256.Sum256(data)
	out.SourceSHA256 = hex.EncodeToString(sum[:])
	for _, target := range stageTargets {
		caps := pb.Caps.CapSet(pb.Caps.All())
		state, _, _, _, err := dockerfile2llb.Dockerfile2LLB(ctx, data, dockerfile2llb.ConvertOpt{
			MetaResolver: resolver,
			LLBCaps:      &caps,
			Config:       dockerui.Config{Target: target.ConfigTarget, BuildArgs: buildArgs},
		})
		if err != nil {
			panic(fmt.Errorf("target %q: %w", target.Name, err))
		}
		def, err := state.Marshal(ctx)
		if err != nil {
			panic(err)
		}
		operations := map[string][]string{}
		rawCustomNames := []string{}
		for _, meta := range def.Metadata {
			name := meta.Description["llb.customname"]
			if name != "" {
				rawCustomNames = append(rawCustomNames, name)
			}
			if !strings.HasPrefix(name, "[") {
				continue
			}
			rest := strings.TrimPrefix(name, "[")
			end := strings.IndexByte(rest, ' ')
			if end <= 0 {
				continue
			}
			stage := rest[:end]
			if _, ok := known[strings.ToLower(stage)]; !ok {
				continue
			}
			operations[stage] = append(operations[stage], name)
		}
		closure := make([]string, 0, len(operations))
		for _, s := range stageTargets {
			if len(operations[s.Name]) != 0 {
				closure = append(closure, s.Name)
			}
		}
		for s := range operations {
			sort.Strings(operations[s])
		}
		fileCopies := []fileCopySummary{}
		for _, encoded := range def.Def {
			var op pb.Op
			if err := proto.Unmarshal(encoded, &op); err != nil {
				panic(fmt.Errorf("decode LLB op for target %q: %w", target.Name, err))
			}
			if file := op.GetFile(); file != nil {
				for _, action := range file.GetActions() {
					if copy := action.GetCopy(); copy != nil {
						fileCopies = append(fileCopies, fileCopySummary{Source: copy.Src, Destination: copy.Dest})
					}
				}
			}
		}
		sort.Slice(rawCustomNames, func(i, j int) bool { return rawCustomNames[i] < rawCustomNames[j] })
		out.Targets = append(out.Targets, targetResult{Target: target, Vertices: len(def.Def), Closure: closure, Operations: operations, RawCustomNames: rawCustomNames, FileCopies: fileCopies})
	}
	b, err := json.MarshalIndent(out, "", "  ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(b))
}
