import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {compareDockerfileSources} from './compare-sources.mjs';
import {makeDockerIgnore} from './docker-ignore-adapter.mjs';
import {context_plan} from '../web/engine.mjs';

const repo = fileURLToPath(new URL('..', import.meta.url));
const relative = 'evidence/tempo-docker-update-20260716';
const evidence = path.join(repo, relative);
const precisionEvidence = path.join(repo, 'evidence/source-precision-20260929');
const sourceDir = path.join(evidence, 'source');
const microDir = path.join(evidence, 'buildarg-reference');
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const read = name => fs.readFileSync(path.join(sourceDir, name));
const parse = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const metadata = parse(path.join(sourceDir, 'source-metadata.json'));
const treeBytes = read('git-tree.json');
const tree = JSON.parse(treeBytes);
const commitBytes = read('commit.json');
const commit = JSON.parse(commitBytes);
const before = read('before.Dockerfile').toString('utf8');
const after = read('after.Dockerfile').toString('utf8');
const ignoreText = read('.dockerignore').toString('utf8');
const makefile = read('Makefile').toString('utf8');
const licenseBytes = read('LICENSE');

assert.equal(metadata.commit, '3f54f1c040a5c014a7f3acde22376060807178c6');
assert.equal(metadata.parent, '55924f126cd2f532a448fe4af4bd00e2d11638be');
assert.equal(metadata.licenseSpdx, 'AGPL-3.0');
assert.equal(metadata.treeTruncated, false);
assert.equal(tree.truncated, false);
assert.equal(tree.tree.length, metadata.treeEntries);
assert.equal(tree.sha, metadata.commit);
assert.equal(commit.sha, metadata.commit);
assert.equal(digest(treeBytes), metadata.treeResponseSha256);
assert.equal(digest(commitBytes), metadata.commitResponseSha256);
assert.equal(digest(read('before.Dockerfile')), 'cdd1928b8fd76be06251d2ee2a00163cd04c99e86ace1090648d6e45e7ffdd9e');
assert.equal(digest(read('after.Dockerfile')), '72693daf717c08c0752e9d97d7a7bf60a21fef554110c0560c03b6f97c9e4379');
assert.equal(digest(read('.dockerignore')), '5a55c351e9651776d20123c4daa380e5865bb14645beb9aae03aff67dbf4c01e');
assert.equal(digest(read('Makefile')), '5ffb57757dd5ecdc29915c0611eb993ba0f888de9f20752c2fc4746226b4ae5a');
assert.equal(digest(licenseBytes), '0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0');
assert.equal(metadata.dockerfileSpecificIgnorePresent, false);
assert(!tree.tree.some(entry => entry.path === 'cmd/tempo/Dockerfile.dockerignore'));
assert(makefile.includes('docker-tempo:'));
assert(makefile.includes('COMPONENT=tempo make docker-component'));
assert(makefile.includes('docker-component: check-component exe'));
assert(makefile.includes('GOOS=linux make $(COMPONENT)'));
assert(makefile.includes('docker build -t grafana/$(COMPONENT) --build-arg=TARGETARCH=$(GOARCH) -f ./cmd/$(COMPONENT)/Dockerfile .'));
assert(!tree.tree.some(entry => entry.path === 'bin/linux/tempo-amd64'));

const ignore = makeDockerIgnore(ignoreText);
const entries = tree.tree.map(entry => ({
  path: entry.path,
  kind: entry.type === 'tree' || entry.type === 'commit'
    ? 'directory'
    : entry.mode === '120000' ? 'symlink' : 'file',
  excluded: ignore.ignores(entry.path),
}));
// This is a post-Make inventory model. The source snapshot does not contain the
// amd64 binary; no output binary bytes are invented or built by this runner.
for (const [file, kind] of [
  ['bin', 'directory'],
  ['bin/linux', 'directory'],
  ['bin/linux/tempo-amd64', 'file'],
]) {
  assert(!entries.some(entry => entry.path === file), `source tree unexpectedly contains ${file}`);
  entries.push({path: file, kind, excluded: ignore.ignores(file)});
}
entries.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
assert(entries.length <= 20000);
assert(entries.find(entry => entry.path === 'docs').excluded);
assert(entries.find(entry => entry.path === 'opentelemetry-proto').excluded);

const change = {path: 'bin/linux/tempo-amd64', excluded: false};
const rawPlan = context_plan(
  after,
  JSON.stringify(entries),
  '',
  JSON.stringify([change]),
  JSON.stringify({TARGETARCH: 'amd64'}),
  JSON.stringify(['cmd/tempo/Dockerfile', '.dockerignore']),
);
assert(!rawPlan.startsWith('ERROR:'), rawPlan);
const context = JSON.parse(rawPlan);
const binaryInput = context.inputs.find(input => input.line === 14);
assert(binaryInput, 'expected the local tempo binary COPY at line 14');
assert.equal(binaryInput.source, change.path);
assert.equal(binaryInput.status, 'resolved');
assert.deepEqual(binaryInput.included.map(index => context.entries[index].path), [change.path]);
assert.deepEqual(context.changes[0].source_lines, [14]);

const comparison = await compareDockerfileSources({
  before: path.join(sourceDir, 'before.Dockerfile'),
  after: path.join(sourceDir, 'after.Dockerfile'),
});
assert.equal(comparison.before.sha256, 'cdd1928b8fd76be06251d2ee2a00163cd04c99e86ace1090648d6e45e7ffdd9e');
assert.equal(comparison.after.sha256, '72693daf717c08c0752e9d97d7a7bf60a21fef554110c0560c03b6f97c9e4379');
assert.deepEqual(comparison.result.before_lines, [5, 11]);
assert.deepEqual(comparison.result.after_lines, [5, 11]);
assert.equal(comparison.result.diff_exact, true);
assert.equal(comparison.result.diff_reason, 'bounded line diff retained separate edit hunks');
assert.equal(comparison.result.impact.before.stages[0].base, comparison.result.impact.after.stages[0].base);
assert.notEqual(comparison.result.impact.before.stages[1].base, comparison.result.impact.after.stages[1].base);
assert.notEqual(comparison.result.impact.before.stages[2].base, comparison.result.impact.after.stages[2].base);
assert.deepEqual(comparison.result.impact.before.changed_stages, [1, 2]);
assert.deepEqual(comparison.result.impact.after.changed_stages, [1, 2]);
assert.deepEqual(comparison.result.impact.affected_targets, ['tempo-setup', '#2']);
assert.equal(comparison.result.impact.before.targets[0].affected, false);
assert.equal(comparison.result.impact.before.targets[1].affected, true);
assert.equal(comparison.result.impact.before.targets[2].affected, true);
assert.equal(comparison.result.impact.after.targets[0].affected, false);
assert.equal(comparison.result.impact.conservative, false);

const buildkitBefore = parse(path.join(evidence, 'buildkit-before.json'));
const buildkitAfter = parse(path.join(evidence, 'buildkit-after.json'));
const profileBytes = fs.readFileSync(path.join(evidence, 'profiles/profiles.json'));
const profileSetHash = digest(profileBytes);
for (const [report, sourceHash] of [[buildkitBefore, comparison.before.sha256], [buildkitAfter, comparison.after.sha256]]) {
  assert.equal(report.buildkit, 'moby/buildkit v0.25.1');
  assert.equal(report.source_sha256, sourceHash);
  assert.equal(report.resolver, 'exact linux/amd64 image config blobs from pinned OCI manifests; no daemon/build');
  assert.equal(report.profile_set_sha256, profileSetHash);
  assert.equal(report.image_profiles.length, 5);
  assert(report.image_profiles.every(image => image.platform === 'linux/amd64' && image.onbuild_count === 0));
}
const beforeStages = new Map(buildkitBefore.stage_targets.map(stage => [stage.name, stage.base]));
const afterStages = new Map(buildkitAfter.stage_targets.map(stage => [stage.name, stage.base]));
const changedBaseStages = [...afterStages].filter(([name, base]) => beforeStages.get(name) !== base).map(([name]) => name);
assert.deepEqual(changedBaseStages, ['tempo-setup', 'stage-2']);
const beforeDefault = buildkitBefore.targets.find(target => target.target.default);
const afterDefault = buildkitAfter.targets.find(target => target.target.default);
assert(beforeDefault && afterDefault);
assert.deepEqual(beforeDefault.stage_closure, ['ca-certificates', 'tempo-setup', 'stage-2']);
assert.deepEqual(afterDefault.stage_closure, beforeDefault.stage_closure);
assert.equal(beforeDefault.llb_vertices, 14);
assert.equal(afterDefault.llb_vertices, 14);
const caBefore = buildkitBefore.targets.find(target => target.target.name === 'ca-certificates');
const caAfter = buildkitAfter.targets.find(target => target.target.name === 'ca-certificates');
assert.equal(caBefore.llb_vertices, 3);
assert.deepEqual(caAfter.stage_operations, caBefore.stage_operations);

const explicitArgReceipt = parse(path.join(microDir, 'buildkit-explicit-arg.json'));
const envAfterArgReceipt = parse(path.join(microDir, 'buildkit-env-after-arg.json'));
const targetResult = report => report.targets.find(target => target.target.default);
assert.deepEqual(explicitArgReceipt.build_args, {TARGETARCH: 'amd64'});
assert(targetResult(explicitArgReceipt).file_copies.some(copy => copy.source === '/bin/linux/tempo-amd64' && copy.destination === '/tempo'));
assert(targetResult(explicitArgReceipt).raw_custom_names.some(name => name.includes('COPY bin/linux/tempo-amd64 /tempo')));
assert.deepEqual(envAfterArgReceipt.build_args, {TARGETARCH: 'amd64'});
assert(targetResult(envAfterArgReceipt).file_copies.some(copy => copy.source === '/bin/linux/tempo-arm64' && copy.destination === '/tempo'));
assert(targetResult(envAfterArgReceipt).raw_custom_names.some(name => name.includes('COPY bin/linux/tempo-arm64 /tempo')));

const output = {
  format: 'moonbit-dockerlint-local-source-precision-review/1',
  generated_at_utc: new Date().toISOString(),
  project_version: {published: '0.10.0', local: '0.11.0', published_or_pushed: false, prior_0_10_1_receipt_preserved: true},
  prior_tempo_receipt_sha256: digest(fs.readFileSync(path.join(evidence, 'LOCAL-CHECKS.json'))),
  case: {
    repository: metadata.repository,
    license: metadata.licenseSpdx,
    commit: metadata.commit,
    parent: metadata.parent,
    message: metadata.message,
    source_sha256: {
      before_dockerfile: digest(read('before.Dockerfile')),
      after_dockerfile: digest(read('after.Dockerfile')),
      dockerignore: digest(read('.dockerignore')),
      makefile: digest(read('Makefile')),
      license: digest(licenseBytes),
      profile_set: profileSetHash,
    },
    make_target_evidence: ['docker-tempo', 'docker-component', 'exe', 'tempo'],
    ignore: {
      root_file_used: '.dockerignore',
      dockerfile_specific_file_present: false,
      excluded_directories_checked: ['docs', 'opentelemetry-proto'],
    },
  },
  tempo_base_digest_review: {
    oracle: 'BuildKit Dockerfile2LLB to LLB; fixed image configs from pinned OCI digests; no daemon or build',
    profiles: buildkitAfter.image_profiles.map(({name, pinned_index_digest, platform, config_digest, onbuild_count}) => ({name, pinned_index_digest, platform, config_digest, onbuild_count})),
    changed_base_stages: changedBaseStages,
    default_target_closure: afterDefault.stage_closure,
    default_target_vertices_before_after: [beforeDefault.llb_vertices, afterDefault.llb_vertices],
    unchanged_ca_certificates_stage: caAfter.stage_operations,
    moonbit_source_compare: {
      before_lines: comparison.result.before_lines,
      after_lines: comparison.result.after_lines,
      diff_exact: comparison.result.diff_exact,
      diff_reason: comparison.result.diff_reason,
      changed_stages_before: comparison.result.impact.before.changed_stages,
      changed_stages_after: comparison.result.impact.after.changed_stages,
      affected_targets: comparison.result.impact.affected_targets,
      conservative: comparison.result.impact.conservative,
      reason: comparison.result.impact.reason,
    },
  },
  local_artifact_change_review: {
    change: change.path,
    source_snapshot_contains_artifact: false,
    inventory_assumption: 'post-Makefile-output path inserted as a synthetic zero-byte file entry; no artifact bytes were created',
    input: {line: binaryInput.line, source: binaryInput.source, status: binaryInput.status, selected_paths: binaryInput.included.map(index => context.entries[index].path)},
    source_lines: context.changes[0].source_lines,
    affected_targets: context.changes[0].targets.filter(target => target.affected).map(target => target.target),
    conservative: context.changes[0].conservative,
    unresolved_metadata: context.uncertainties,
  },
  build_arg_reference: {
    oracle: 'BuildKit v0.25.1 conversion with synthetic linux/amd64 image config; no image pull or build',
    base_config_sha256: digest(fs.readFileSync(path.join(microDir, 'base.config.json'))),
    base_env: 'TARGETARCH=other',
    explicit_arg_copy: {build_args: explicitArgReceipt.build_args, file_copies: targetResult(explicitArgReceipt).file_copies, raw_custom_names: targetResult(explicitArgReceipt).raw_custom_names},
    env_after_arg_copy: {build_args: envAfterArgReceipt.build_args, file_copies: targetResult(envAfterArgReceipt).file_copies, raw_custom_names: targetResult(envAfterArgReceipt).raw_custom_names},
    precedence_verified: ['explicit ARG replaces same-name base image ENV', 'later Dockerfile ENV replaces ARG for subsequent COPY'],
  },
  limitations: [
    'No Docker build, daemon, runtime test, cache-key comparison, benchmark, production adoption, security-skip claim, or deployment was performed.',
    'BuildKit LLB reference resolves graph operations; 14 vertices do not measure build cost or cache reuse.',
    'The new bounded source diff reports the two Tempo FROM lines separately and agrees with BuildKit target impact for this case; source-diff precision does not establish cache reuse or safe build skipping.',
    'Ambiguous repeated-line alignment and comparisons over the 1,000,000-cell LCS budget explicitly fall back to the full differing span and mark the result conservative.',
    'MoonBit context analysis does not consume the image profile. It resolves the declared TARGETARCH input but keeps external ONBUILD metadata uncertain, so a local binary change is conservatively attributed to every external-base stage.',
    'The Tempo binary is generated by Make and was not built. Its post-Make path was modeled only to verify COPY resolution.',
    'External ONBUILD metadata remains unavailable to the core context analyzer; local context-file impact still conservatively widens across external-base stages.',
    'The public CI result covers the published 0.10.0 commit only; it did not execute these 0.11.0 changes or this acceptance runner.',
  ],
};

const args = process.argv.slice(2);
if (args.length !== 2 || args[0] !== '--out') {
  throw new Error('Usage: node tools/run-tempo-impact.mjs --out evidence/source-precision-20260929/REPLAY.json (choose a new unused path for each run)');
}
const destination = path.resolve(repo, args[1]);
assert(destination.startsWith(precisionEvidence + path.sep), 'report output must remain inside the precision reassessment evidence directory');
fs.writeFileSync(destination, JSON.stringify(output, null, 2) + '\n', {flag: 'wx'});
console.log(JSON.stringify({ok: true, report: path.relative(repo, destination), prior_receipt_sha256: output.prior_tempo_receipt_sha256, source_entries: tree.tree.length, modeled_entries: entries.length, image_profiles: buildkitAfter.image_profiles.length, changed_lines: comparison.result.before_lines, changed_stages: comparison.result.impact.before.changed_stages, affected_targets: comparison.result.impact.affected_targets, conservative: comparison.result.impact.conservative, buildkit_explicit_arg: true, buildkit_env_after_arg: true}, null, 2));
