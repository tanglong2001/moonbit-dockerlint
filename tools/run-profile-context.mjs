import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {loadImageProfiles} from './image-profiles.mjs';
import {makeDockerIgnore} from './docker-ignore-adapter.mjs';
import {context_plan_with_metadata} from '../web/engine.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const evidence = path.join(root, 'evidence/tempo-docker-update-20260716');
const outputDir = path.join(root, 'evidence/profile-context-20260930');
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const read = file => fs.readFileSync(path.join(evidence, file));
const treeBytes = read('source/git-tree.json');
const metadata = JSON.parse(read('source/source-metadata.json'));
const tree = JSON.parse(treeBytes);
assert.equal(digest(treeBytes), metadata.treeResponseSha256);
assert.equal(tree.sha, '3f54f1c040a5c014a7f3acde22376060807178c6');
assert.equal(tree.truncated, false);
const ignoreBytes = read('source/.dockerignore');
assert.equal(digest(ignoreBytes), '5a55c351e9651776d20123c4daa380e5865bb14645beb9aae03aff67dbf4c01e');
const ignore = makeDockerIgnore(ignoreBytes.toString('utf8'));
const entries = tree.tree.map(item => ({path: item.path,
  kind: ['tree', 'commit'].includes(item.type) ? 'directory' : item.mode === '120000' ? 'symlink' : 'file',
  excluded: ignore.ignores(item.path)}));
// Explicitly modeled post-Make path; no Tempo artifact bytes or Docker build.
for (const [name, kind] of [['bin', 'directory'], ['bin/linux', 'directory'], ['bin/linux/tempo-amd64', 'file']]) {
  assert(!entries.some(item => item.path === name));
  entries.push({path: name, kind, excluded: ignore.ignores(name)});
}
const change = {path: 'bin/linux/tempo-amd64', excluded: false};
const profiles = loadImageProfiles(path.join(evidence, 'profiles/profiles.json'), 'linux/amd64');
assert.equal(profiles.metadata.length, 5);
const cases = [];
for (const snapshot of ['before', 'after']) {
  const sourceBytes = read(`source/${snapshot}.Dockerfile`);
  const source = sourceBytes.toString('utf8');
  const referenceBytes = read(`buildkit-${snapshot}.json`);
  const reference = JSON.parse(referenceBytes);
  assert.equal(reference.buildkit, 'moby/buildkit v0.25.1');
  assert.equal(reference.source_sha256, digest(sourceBytes));
  assert.equal(reference.profile_set_sha256, profiles.set_sha256.slice(7));
  const evaluate = (records, platform = 'linux/amd64') => {
    const raw = context_plan_with_metadata(source, JSON.stringify(entries), '', JSON.stringify([change]),
      JSON.stringify({TARGETARCH: 'amd64'}), JSON.stringify(['cmd/tempo/Dockerfile', '.dockerignore']), platform, JSON.stringify(records));
    assert(!raw.startsWith('ERROR:'), raw);
    return JSON.parse(raw);
  };
  const unprofiled = evaluate([]);
  assert.deepEqual(unprofiled.changes[0].targets.map(target => target.affected), [true, true, true]);
  const profiled = evaluate(profiles.metadata);
  const observedCopies = reference.targets.map(target => target.file_copies.some(copy => copy.source === '/' + change.path));
  assert.deepEqual(observedCopies, [false, false, true]);
  assert.deepEqual(profiled.changes[0].targets.map(target => target.affected), observedCopies);
  assert.equal(profiled.changes[0].conservative, false);
  assert.deepEqual(profiled.changes[0].source_lines, [14]);
  assert.deepEqual(profiled.uncertainties, []);
  const input = profiled.inputs.find(item => item.line === 14);
  assert.equal(input.source, change.path);
  assert.equal(input.status, 'resolved');
  const wrongPlatform = evaluate(profiles.metadata, 'linux/arm64');
  assert.equal(wrongPlatform.changes[0].conservative, true);
  assert.deepEqual(wrongPlatform.changes[0].targets.map(target => target.affected), [true, true, true]);
  const missing = evaluate(profiles.metadata.filter(item => !item.reference.startsWith('alpine:')));
  assert.equal(missing.changes[0].conservative, true);
  assert.deepEqual(missing.changes[0].targets.map(target => target.affected), [true, false, true]);
  cases.push({snapshot, source_sha256: digest(sourceBytes), fixed_buildkit_receipt_sha256: digest(referenceBytes),
    buildkit_observed_copy_targets: observedCopies, unprofiled_impact: unprofiled.changes[0],
    profiled_impact: profiled.changes[0], metadata_decisions: profiled.image_metadata,
    missing_alpine_profile_impact: missing.changes[0], wrong_platform_impact: wrongPlatform.changes[0]});
}
const report = {format: 'moonbit-profile-context-replay/1', generated_at_utc: new Date().toISOString(),
  local_version: '0.12.0', pushed_or_published: false, platform: 'linux/amd64', image_profiles: profiles,
  case: {repository: metadata.repository, commit: metadata.commit, parent: metadata.parent, license: 'AGPL-3.0',
    source_tree_sha256: digest(treeBytes), source_entries: tree.tree.length, modeled_entries: entries.length,
    change: change.path, binary_built: false}, cases,
  limitations: [
    'Fresh MoonBit execution compared with previously saved BuildKit v0.25.1 conversion outputs; BuildKit was not rerun by this script.',
    'The generated binary path is a post-Make inventory assumption, not an actual Tempo binary or actual changed file contents.',
    'No Docker build, image layer verification, cache-key comparison, benchmark, safe-build-skip proof, deployment or adoption evidence.',
    'Only literal index-digest-pinned FROM with exact Linux platform and empty OnBuild can refine the unknown seed; no generic trigger interpreter or base ENV resolution.',
    'Core metadata is a host-verified contract; the Node loader verifies raw blobs, whereas direct MoonBit callers must perform the same verification.',
  ]};
const args = process.argv.slice(2);
assert(args.length === 2 && args[0] === '--out', 'Usage: node tools/run-profile-context.mjs --out evidence/profile-context-20260930/NEW-REPLAY.json');
const destination = path.resolve(root, args[1]);
assert(destination.startsWith(outputDir + path.sep), 'output must stay within profile-context evidence directory');
fs.mkdirSync(outputDir, {recursive: true});
fs.writeFileSync(destination, JSON.stringify(report, null, 2) + '\n', {flag: 'wx'});
console.log(JSON.stringify({status: 'pass', report: path.relative(root, destination), profiles: profiles.metadata.length,
  cases: cases.map(item => ({snapshot: item.snapshot, without_metadata: item.unprofiled_impact.targets.map(target => target.affected),
    with_metadata: item.profiled_impact.targets.map(target => target.affected), conservative: item.profiled_impact.conservative}))}, null, 2));
