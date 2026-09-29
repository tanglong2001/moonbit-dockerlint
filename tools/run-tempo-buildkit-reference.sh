#!/usr/bin/env bash
set -euo pipefail

repo=/mnt/d/CodexLocal/ban/outputs/repos/moonbit-dockerlint
cache=/mnt/d/CodexLocal/ban/work/reassessment-20260927/buildkit-reference
evidence="$repo/evidence/tempo-docker-update-20260716"
profiles="$evidence/profiles/profiles.json"
micro="$evidence/buildarg-reference"

export GOCACHE="$cache/gocache"
export GOMODCACHE="$cache/gomodcache"
export GOPATH="$cache/gopath"
export GOPROXY=off
export GOSUMDB=off
export GOTOOLCHAIN=local

cd "$repo/tools/closure-reference"
go run . --profiles "$profiles" "$evidence/source/before.Dockerfile" > "$evidence/buildkit-before.json" 2> "$evidence/buildkit-before.stderr"
go run . --profiles "$profiles" "$evidence/source/after.Dockerfile" > "$evidence/buildkit-after.json" 2> "$evidence/buildkit-after.stderr"
go run . --profiles "$micro/profiles.json" --build-arg TARGETARCH=amd64 "$micro/copy-uses-explicit-arg.Dockerfile" > "$micro/buildkit-explicit-arg.json" 2> "$micro/buildkit-explicit-arg.stderr"
go run . --profiles "$micro/profiles.json" --build-arg TARGETARCH=amd64 "$micro/copy-after-env.Dockerfile" > "$micro/buildkit-env-after-arg.json" 2> "$micro/buildkit-env-after-arg.stderr"
