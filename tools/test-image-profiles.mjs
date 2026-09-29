import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import test from 'node:test';
import {loadImageProfiles} from './image-profiles.mjs';
import {inspectBuildContext} from './context-client.mjs';

const repo = fileURLToPath(new URL('..', import.meta.url));
const fixed = path.join(repo, 'evidence/tempo-docker-update-20260716/profiles');
const sha = bytes => 'sha256:' + createHash('sha256').update(bytes).digest('hex');
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'dockerlint-profiles-'));
  assert(path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep));
  t.after(() => fs.rmSync(root, {recursive: true, force: true}));
  return root;
}
function write(root, name, value) {
  const bytes = Buffer.from(JSON.stringify(value));
  fs.writeFileSync(path.join(root, name), bytes);
  return bytes;
}
function synthetic(t, transform = value => value) {
  const root = fixture(t);
  const transformed = transform({os: 'linux', architecture: 'amd64', config: {OnBuild: []}});
  const config = typeof transformed === 'string' ? Buffer.from(transformed) : Buffer.from(JSON.stringify(transformed));
  fs.writeFileSync(path.join(root, 'config.json'), config);
  const manifest = write(root, 'manifest.json', {schemaVersion: 2, mediaType: 'application/vnd.oci.image.manifest.v1+json', config: {
    mediaType: 'application/vnd.oci.image.config.v1+json', digest: sha(config), size: config.length}, layers: []});
  const index = write(root, 'index.json', {schemaVersion: 2, mediaType: 'application/vnd.oci.image.index.v1+json', manifests: [{
    mediaType: 'application/vnd.oci.image.manifest.v1+json', digest: sha(manifest), size: manifest.length, platform: {os: 'linux', architecture: 'amd64'}}]});
  const reference = 'example.invalid/base@' + sha(index);
  const profile = {reference, platform: 'linux/amd64', indexFile: 'index.json', platformManifestFile: 'manifest.json', configFile: 'config.json', onbuild: []};
  const file = path.join(root, 'profiles.json');
  const save = (images = [profile]) => write(root, 'profiles.json', {format: 'dockerlint-image-profile/1', images});
  save();
  return {root, file, reference, profile, save};
}
const accepted = result => result.records.filter(record => record.status === 'verified');

test('five fixed upstream image chains are verified from original bytes, not summary assertions', () => {
  const result = loadImageProfiles(path.join(fixed, 'profiles.json'), 'linux/amd64');
  assert.equal(result.metadata.length, 5);
  assert.equal(accepted(result).length, 5);
  assert(result.metadata.every(value => value.onbuild.length === 0));
  assert.equal(result.metadata[0].config_digest, 'sha256:d529dd0c6e5597ac7e4a3e2dea65c3fcc6173f4cae713c409265c1dd9914a11b');
});
test('tampering at every raw-byte link and descriptor size mismatch cannot refine analysis', t => {
  for (const blob of ['index.json', 'manifest.json', 'config.json']) {
    const sample = synthetic(t);
    fs.appendFileSync(path.join(sample.root, blob), ' ');
    const result = loadImageProfiles(sample.file, 'linux/amd64');
    assert.equal(result.metadata.length, 0, blob);
    assert.match(result.records[0].reason, /digest mismatch|size mismatch/);
  }
});
test('wrong platform, duplicate identities, mutable tags and path traversal are rejected', t => {
  const sample = synthetic(t);
  assert.equal(loadImageProfiles(sample.file, 'linux/arm64').metadata.length, 0);
  sample.save([sample.profile, sample.profile]);
  assert.equal(loadImageProfiles(sample.file, 'linux/amd64').metadata.length, 0);
  sample.save([{...sample.profile, reference: 'example.invalid/base:latest'}]);
  assert.match(loadImageProfiles(sample.file, 'linux/amd64').records[0].reason, /digest-pinned/);
  sample.save([{...sample.profile, configFile: '../outside.json'}]);
  assert.match(loadImageProfiles(sample.file, 'linux/amd64').records[0].reason, /simple JSON filename/);
});
test('raw nonempty OnBuild overrides forged empty summary and remains conservative through worker', async t => {
  for (const trigger of ['COPY --from=downstream /data /app', 'RUN --mount=from=named,target=/src true']) {
    const sample = synthetic(t, config => ({...config, config: {OnBuild: [trigger]}}));
    const result = loadImageProfiles(sample.file, 'linux/amd64');
    assert.deepEqual(result.metadata[0].onbuild, [trigger]);
    fs.writeFileSync(path.join(sample.root, 'Dockerfile'), `FROM ${sample.reference}\n`);
    const report = await inspectBuildContext({context: sample.root, platform: 'linux/amd64', imageProfiles: sample.file, changedFiles: ['other']});
    assert.equal(report.plan.changes[0].conservative, true);
    assert.equal(report.plan.changes[0].targets[0].affected, true);
  }
});
test('ambiguous config casing, invalid triggers and incompatible config platform are rejected', t => {
  for (const change of [
    config => ({...config, Config: {OnBuild: ['COPY . /out']}}),
    config => ({...config, config: {OnBuild: [], onbuild: ['COPY . /out']}}),
    config => ({...config, config: {OnBuild: 'COPY . /out'}}),
    config => ({...config, architecture: 'arm64'}),
  ]) {
    const sample = synthetic(t, change);
    assert.equal(loadImageProfiles(sample.file, 'linux/amd64').metadata.length, 0);
  }
});
test('duplicate decoded JSON keys cannot hide triggers via Go struct merge semantics', t => {
  for (const raw of [
    '{"os":"linux","architecture":"amd64","config":{"OnBuild":["COPY . /out"]},"config":{}}',
    '{"os":"linux","architecture":"amd64","config":{"OnBuild":["COPY . /out"]},"confi\\u0067":{}}',
    '{"os":"linux","architecture":"amd64","config":{"OnBuild":["COPY . /out"],"OnBuild":[]}}',
  ]) {
    const sample = synthetic(t, () => raw);
    const result = loadImageProfiles(sample.file, 'linux/amd64');
    assert.equal(result.metadata.length, 0);
    assert.match(result.records[0].reason, /duplicate JSON object key/);
  }
});
test('CLI uses verified profiles; corrupt profile retains unknown impact and reports its reason', t => {
  const sample = synthetic(t);
  fs.writeFileSync(path.join(sample.root, 'Dockerfile'), `FROM ${sample.reference} AS external\nCOPY app /app\nFROM scratch AS unrelated\n`);
  fs.writeFileSync(path.join(sample.root, 'app'), 'actual input');
  const args = [path.join(repo, 'tools/context-cli.mjs'), '--context', sample.root, '--platform', 'linux/amd64', '--image-profiles', sample.file, '--changed-file', 'unrelated.txt'];
  const good = spawnSync(process.execPath, args, {encoding: 'utf8', timeout: 35000});
  assert.equal(good.status, 0, good.stderr);
  assert.deepEqual(JSON.parse(good.stdout).plan.changes[0].targets.map(target => target.affected), [false, false]);
  fs.appendFileSync(path.join(sample.root, 'config.json'), ' ');
  const bad = spawnSync(process.execPath, args, {encoding: 'utf8', timeout: 35000});
  assert.equal(bad.status, 3, bad.stderr);
  const report = JSON.parse(bad.stdout);
  assert.equal(report.image_profiles.records[0].status, 'rejected');
  assert.deepEqual(report.plan.changes[0].targets.map(target => target.affected), [true, false]);
  assert.equal(report.plan.changes[0].conservative, true);
});
