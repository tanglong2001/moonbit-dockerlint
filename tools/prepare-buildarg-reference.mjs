import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const repo = fileURLToPath(new URL('..', import.meta.url));
const output = path.join(repo, 'evidence/tempo-docker-update-20260716/buildarg-reference');
fs.mkdirSync(output, {recursive: true});
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const indexDigest = 'sha256:' + 'a'.repeat(64);
const config = {
  architecture: 'amd64',
  os: 'linux',
  config: {Env: ['PATH=/usr/local/bin:/usr/bin:/bin', 'TARGETARCH=other'], OnBuild: []},
  rootfs: {type: 'layers', diff_ids: ['sha256:' + '0'.repeat(64)]},
};
const configBytes = Buffer.from(JSON.stringify(config, null, 2) + '\n');
const configDigest = 'sha256:' + sha256(configBytes);
const profile = {
  format: 'dockerlint-image-profile/1',
  platform: 'linux/amd64',
  images: [{
    name: 'synthetic-buildarg-env',
    reference: 'registry.invalid/moonbit-dockerlint-buildarg@' + indexDigest,
    platform: 'linux/amd64',
    pinnedIndexDigest: indexDigest,
    configDigest,
    configFile: 'base.config.json',
    configSha256: sha256(configBytes),
    onbuild: [],
  }],
};
const files = {
  'base.config.json': configBytes,
  'profiles.json': Buffer.from(JSON.stringify(profile, null, 2) + '\n'),
  'copy-uses-explicit-arg.Dockerfile': Buffer.from(
    `FROM registry.invalid/moonbit-dockerlint-buildarg@${indexDigest} AS app\nARG TARGETARCH\nCOPY bin/linux/tempo-\${TARGETARCH} /tempo\n`,
  ),
  'copy-after-env.Dockerfile': Buffer.from(
    `FROM registry.invalid/moonbit-dockerlint-buildarg@${indexDigest} AS app\nARG TARGETARCH\nENV TARGETARCH=arm64\nCOPY bin/linux/tempo-\${TARGETARCH} /tempo\n`,
  ),
};
for (const [name, bytes] of Object.entries(files)) {
  const destination = path.join(output, name);
  fs.writeFileSync(destination, bytes);
}
console.log(JSON.stringify({directory: path.relative(repo, output), files: Object.fromEntries(Object.entries(files).map(([name, bytes]) => [name, sha256(bytes)]))}, null, 2));
