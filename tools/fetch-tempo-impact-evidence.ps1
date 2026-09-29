param()

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$evidence = Join-Path $repoRoot 'evidence/tempo-docker-update-20260716'
$sourceDir = Join-Path $evidence 'source'
$profileDir = Join-Path $evidence 'profiles'
New-Item -ItemType Directory -Force -Path $sourceDir, $profileDir | Out-Null

$newCommit = '3f54f1c040a5c014a7f3acde22376060807178c6'
$oldCommit = '55924f126cd2f532a448fe4af4bd00e2d11638be'
$headers = @{ 'User-Agent' = 'Codex-local-dockerlint-review'; Accept = 'application/vnd.github+json' }

function Get-Bytes([string]$Uri, [hashtable]$Headers = @{}) {
  $response = Invoke-WebRequest -Uri $Uri -Headers $Headers -UseBasicParsing
  $bytes = if ($response.Content -is [byte[]]) {
    [byte[]]$response.Content
  } else {
    [Text.Encoding]::UTF8.GetBytes([string]$response.Content)
  }
  return @{
    Bytes = $bytes
    ContentType = [string]$response.Headers['Content-Type']
    DigestHeader = [string]$response.Headers['Docker-Content-Digest']
  }
}

function Get-Sha256([byte[]]$Bytes) {
  $sha = [Security.Cryptography.SHA256]::Create()
  try { return [Convert]::ToHexString($sha.ComputeHash($Bytes)).ToLowerInvariant() }
  finally { $sha.Dispose() }
}

function Save-Bytes([string]$Path, [byte[]]$Bytes) {
  [IO.File]::WriteAllBytes($Path, $Bytes)
  return Get-Sha256 $Bytes
}

function Get-Json([byte[]]$Bytes) {
  return ConvertFrom-Json -InputObject ([Text.Encoding]::UTF8.GetString($Bytes)) -AsHashtable
}

foreach ($source in @(
  @{ Name = 'before.Dockerfile'; Commit = $oldCommit; Path = 'cmd/tempo/Dockerfile' },
  @{ Name = 'after.Dockerfile'; Commit = $newCommit; Path = 'cmd/tempo/Dockerfile' },
  @{ Name = '.dockerignore'; Commit = $newCommit; Path = '.dockerignore' },
  @{ Name = 'Makefile'; Commit = $newCommit; Path = 'Makefile' },
  @{ Name = 'LICENSE'; Commit = $newCommit; Path = 'LICENSE' }
)) {
  $uri = "https://raw.githubusercontent.com/grafana/tempo/$($source.Commit)/$($source.Path)"
  $download = Get-Bytes $uri
  $sha = Save-Bytes (Join-Path $sourceDir $source.Name) $download.Bytes
  Write-Output ("source {0} sha256={1} bytes={2}" -f $source.Path, $sha, $download.Bytes.Length)
}

$commitBytes = (Get-Bytes "https://api.github.com/repos/grafana/tempo/commits/$newCommit" $headers).Bytes
$commit = Get-Json $commitBytes
if ($commit.sha -ne $newCommit -or $commit.parents.Count -ne 1 -or $commit.parents[0].sha -ne $oldCommit) {
  throw 'Unexpected upstream commit or parent'
}
$treeBytes = (Get-Bytes "https://api.github.com/repos/grafana/tempo/git/trees/${newCommit}?recursive=1" $headers).Bytes
$tree = Get-Json $treeBytes
if ($tree.truncated -or $tree.tree.Count -ge 20000) { throw 'Source tree is incomplete or exceeds analyzer inventory limit' }
foreach ($path in @('cmd/tempo/Dockerfile', '.dockerignore', 'Makefile', 'LICENSE')) {
  if (-not ($tree.tree | Where-Object path -eq $path)) { throw "Expected source path missing from fixed tree: $path" }
}
if ($tree.tree | Where-Object path -eq 'cmd/tempo/Dockerfile.dockerignore') {
  throw 'Unexpected Dockerfile-specific ignore file; select it before analysis'
}
if (-not ($tree.tree | Where-Object { $_.path -eq 'opentelemetry-proto' -and $_.mode -eq '160000' })) {
  throw 'Expected excluded submodule entry was not found'
}
$treeSha = Save-Bytes (Join-Path $sourceDir 'git-tree.json') $treeBytes
$commitSha = Save-Bytes (Join-Path $sourceDir 'commit.json') $commitBytes

$sourceMetadata = @{
  repository = 'https://github.com/grafana/tempo'
  commit = $newCommit
  parent = $oldCommit
  commitDate = $commit.commit.committer.date
  message = ($commit.commit.message -split "`n")[0]
  changedFiles = @($commit.files | ForEach-Object { @{ path = $_.filename; status = $_.status; additions = $_.additions; deletions = $_.deletions } })
  tree = $tree.sha
  treeEntries = $tree.tree.Count
  treeTruncated = [bool]$tree.truncated
  commitResponseSha256 = $commitSha
  treeResponseSha256 = $treeSha
  licenseSpdx = 'AGPL-3.0'
  dockerfileSpecificIgnorePresent = $false
}
$sourceMetadata | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath (Join-Path $sourceDir 'source-metadata.json') -Encoding utf8

$dockerToken = Invoke-RestMethod -Uri 'https://auth.docker.io/token?service=registry.docker.io&scope=repository:library/alpine:pull'
$gcrToken = Invoke-RestMethod -Uri 'https://gcr.io/v2/token?service=gcr.io&scope=repository:distroless/static-debian12:pull'
if (-not $dockerToken.token -or -not $gcrToken.token) { throw 'Anonymous read token was not returned' }

$images = @(
  @{ Name = 'alpine-latest'; Host = 'registry-1.docker.io'; Repository = 'library/alpine'; Reference = 'alpine:latest@sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b'; Digest = 'sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b'; Token = $dockerToken.token },
  @{ Name = 'distroless-debug-before'; Host = 'gcr.io'; Repository = 'distroless/static-debian12'; Reference = 'gcr.io/distroless/static-debian12:debug@sha256:46fcf1fa44d251b0944ba4b98ef4bbd266e33034e46489dbf92f680ca4917451'; Digest = 'sha256:46fcf1fa44d251b0944ba4b98ef4bbd266e33034e46489dbf92f680ca4917451'; Token = $gcrToken.token },
  @{ Name = 'distroless-runtime-before'; Host = 'gcr.io'; Repository = 'distroless/static-debian12'; Reference = 'gcr.io/distroless/static-debian12@sha256:9c346e4be81b5ca7ff31a0d89eaeade58b0f95cfd3baed1f36083ddb47ca3160'; Digest = 'sha256:9c346e4be81b5ca7ff31a0d89eaeade58b0f95cfd3baed1f36083ddb47ca3160'; Token = $gcrToken.token },
  @{ Name = 'distroless-debug-after'; Host = 'gcr.io'; Repository = 'distroless/static-debian12'; Reference = 'gcr.io/distroless/static-debian12:debug@sha256:ecbc4ac563b95a132fd370065553857dcc38943066cb0662d09999011f3d3597'; Digest = 'sha256:ecbc4ac563b95a132fd370065553857dcc38943066cb0662d09999011f3d3597'; Token = $gcrToken.token },
  @{ Name = 'distroless-runtime-after'; Host = 'gcr.io'; Repository = 'distroless/static-debian12'; Reference = 'gcr.io/distroless/static-debian12@sha256:61b7ccecebc7c474a531717de80a94709d20547cdcdaf740c25876f2a8e38b44'; Digest = 'sha256:61b7ccecebc7c474a531717de80a94709d20547cdcdaf740c25876f2a8e38b44'; Token = $gcrToken.token }
)
$manifestAccept = 'application/vnd.oci.image.index.v1+json, application/vnd.docker.distribution.manifest.list.v2+json, application/vnd.oci.image.manifest.v1+json, application/vnd.docker.distribution.manifest.v2+json'
$profiles = @()
foreach ($image in $images) {
  $authHeaders = @{ Authorization = "Bearer $($image.Token)"; Accept = $manifestAccept }
  $baseUri = "https://$($image.Host)/v2/$($image.Repository)"
  $index = Get-Bytes "$baseUri/manifests/$($image.Digest)" $authHeaders
  if ((Get-Sha256 $index.Bytes) -ne $image.Digest.Substring(7)) { throw "Index digest mismatch: $($image.Name)" }
  $indexObject = Get-Json $index.Bytes
  $platforms = @($indexObject.manifests | Where-Object { $_.platform.os -eq 'linux' -and $_.platform.architecture -eq 'amd64' })
  if ($platforms.Count -ne 1) { throw "Expected one linux/amd64 descriptor for $($image.Name)" }
  $platform = $platforms[0]
  $manifest = Get-Bytes "$baseUri/manifests/$($platform.digest)" $authHeaders
  if ((Get-Sha256 $manifest.Bytes) -ne $platform.digest.Substring(7)) { throw "Platform manifest digest mismatch: $($image.Name)" }
  $manifestObject = Get-Json $manifest.Bytes
  $configDigest = $manifestObject.config.digest
  $configResponse = Get-Bytes "$baseUri/blobs/$configDigest" @{ Authorization = "Bearer $($image.Token)" }
  if ((Get-Sha256 $configResponse.Bytes) -ne $configDigest.Substring(7)) { throw "Image config digest mismatch: $($image.Name)" }
  $config = Get-Json $configResponse.Bytes
  if ($config.os -ne 'linux' -or $config.architecture -ne 'amd64') { throw "Image config platform mismatch: $($image.Name)" }
  $onbuild = @()
  if ($config.config -and $config.config.Contains('OnBuild')) {
    $onbuild = @($config.config['OnBuild'])
  }

  $indexName = "$($image.Name).index.json"
  $manifestName = "$($image.Name).manifest.json"
  $configName = "$($image.Name).config.json"
  $indexSha = Save-Bytes (Join-Path $profileDir $indexName) $index.Bytes
  $manifestSha = Save-Bytes (Join-Path $profileDir $manifestName) $manifest.Bytes
  $configSha = Save-Bytes (Join-Path $profileDir $configName) $configResponse.Bytes
  $profiles += @{
    name = $image.Name
    reference = $image.Reference
    registry = $image.Host
    repository = $image.Repository
    pinnedIndexDigest = $image.Digest
    indexFile = $indexName
    indexSha256 = $indexSha
    mediaType = $indexObject.mediaType
    platformManifestDigest = $platform.digest
    platformManifestFile = $manifestName
    platformManifestSha256 = $manifestSha
    platform = 'linux/amd64'
    configDigest = $configDigest
    configFile = $configName
    configSha256 = $configSha
    onbuild = $onbuild
    env = @($config.config.Env)
    user = $config.config.User
    workingDir = $config.config.WorkingDir
    entrypoint = @($config.config.Entrypoint)
    cmd = @($config.config.Cmd)
  }
  Write-Output ("image {0} index={1} platformManifest={2} config={3} onbuildCount={4} configSha256={5}" -f $image.Name, $image.Digest, $platform.digest, $configDigest, $onbuild.Count, $configSha)
}

@{
  format = 'dockerlint-image-profile/1'
  sourceCommit = $newCommit
  taskParent = $oldCommit
  platform = 'linux/amd64'
  selection = 'The Dockerfile is used with an amd64 build artifact by the recorded make docker-tempo target.'
  images = $profiles
} | ConvertTo-Json -Depth 12 | Set-Content -LiteralPath (Join-Path $profileDir 'profiles.json') -Encoding utf8
