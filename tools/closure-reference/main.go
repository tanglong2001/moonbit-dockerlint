package main

import (
  "context"
  "crypto/sha256"
  "encoding/hex"
  "encoding/json"
  "fmt"
  "os"
  "sort"
  "strings"

  "github.com/moby/buildkit/client/llb/sourceresolver"
  "github.com/moby/buildkit/frontend/dockerfile/dockerfile2llb"
  "github.com/moby/buildkit/frontend/dockerui"
  digest "github.com/opencontainers/go-digest"
  "github.com/moby/buildkit/solver/pb"
)

type metadataResolver struct{}
func (metadataResolver) ResolveImageConfig(ctx context.Context, ref string, opt sourceresolver.Opt) (string, digest.Digest, []byte, error) {
  // Deliberately fake config: enough for Dockerfile-to-LLB conversion, no external ONBUILD.
  config := map[string]any{
    "architecture": "amd64",
    "os": "linux",
    "config": map[string]any{"Env": []string{"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"}},
    "rootfs": map[string]any{"type": "layers", "diff_ids": []string{"sha256:" + strings.Repeat("0", 64)}},
  }
  b, err := json.Marshal(config)
  return ref, "", b, err
}

type stageInfo struct {
  Index int `json:"index"`
  Name string `json:"name"`
  Base string `json:"base"`
  Default bool `json:"default"`
  ConfigTarget string `json:"config_target"`
}
type targetResult struct {
  Target stageInfo `json:"target"`
  Vertices int `json:"llb_vertices"`
  Closure []string `json:"stage_closure"`
  Operations map[string][]string `json:"stage_operations"`
}
type report struct {
  BuildKit string `json:"buildkit"`
  SourceSHA256 string `json:"source_sha256"`
  Resolver string `json:"resolver"`
  StageTargets []stageInfo `json:"stage_targets"`
  Targets []targetResult `json:"targets"`
}

func main() {
  if len(os.Args) != 2 { panic("usage: oracle Dockerfile") }
  data, err := os.ReadFile(os.Args[1]); if err != nil { panic(err) }
  ctx := context.Background()
  listed, err := dockerfile2llb.ListTargets(ctx, data); if err != nil { panic(err) }
  stageTargets := make([]stageInfo, len(listed.Targets))
  known := map[string]struct{}{}
  for i, t := range listed.Targets {
    name := t.Name
    if name == "" { name = fmt.Sprintf("stage-%d", i) }
    targetArg := t.Name // empty means BuildKit's default final target
    stageTargets[i] = stageInfo{Index:i, Name:name, Base:t.Base, Default:t.Default, ConfigTarget:targetArg}
    known[strings.ToLower(name)] = struct{}{}
  }
  out := report{BuildKit:"moby/buildkit v0.25.1", Resolver:"fake Linux/amd64 image config and dummy rootfs; no registry metadata; Config.OnBuild empty", StageTargets:stageTargets}
  sum := sha256.Sum256(data); out.SourceSHA256 = hex.EncodeToString(sum[:])
  for _, target := range stageTargets {
    caps := pb.Caps.CapSet(pb.Caps.All())
    state, _, _, _, err := dockerfile2llb.Dockerfile2LLB(ctx, data, dockerfile2llb.ConvertOpt{
      MetaResolver: metadataResolver{},
      LLBCaps: &caps,
      Config: dockerui.Config{Target:target.ConfigTarget},
    })
    if err != nil { panic(fmt.Errorf("target %q: %w", target.Name, err)) }
    def, err := state.Marshal(ctx); if err != nil { panic(err) }
    operations := map[string][]string{}
    for _, meta := range def.Metadata {
      name := meta.Description["llb.customname"]
      if !strings.HasPrefix(name, "[") { continue }
      rest := strings.TrimPrefix(name, "[")
      end := strings.IndexByte(rest, ' ')
      if end <= 0 { continue }
      stage := rest[:end]
      if _, ok := known[strings.ToLower(stage)]; !ok { continue }
      operations[stage] = append(operations[stage], name)
    }
    closure := make([]string, 0, len(operations))
    for _, s := range stageTargets {
      if len(operations[s.Name]) != 0 { closure = append(closure, s.Name) }
    }
    for s := range operations { sort.Strings(operations[s]) }
    out.Targets = append(out.Targets, targetResult{Target:target, Vertices:len(def.Def), Closure:closure, Operations:operations})
  }
  b, err := json.MarshalIndent(out, "", "  "); if err != nil { panic(err) }
  fmt.Println(string(b))
}
