import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {compareDockerfileSources} from './compare-sources.mjs';

const folder = new URL('../examples/buildkit-closures/', import.meta.url);
const before = new URL('original.Dockerfile', folder);
const comparisons = [];
// Independent reference is the existing saved BuildKit LLB fixture, not a new graph implementation.
for (const [id, line, expected] of [
  ['copy-test-to-app-base', 22, ['app-zip-creator', '#6']],
  ['copy-appzip-to-app-base', 40, ['#6']],
]) {
  const after = new URL(id + '.Dockerfile', folder);
  const report = await compareDockerfileSources({before: fileURLToPath(before), after: fileURLToPath(after)});
  assert.deepEqual(report.result.before_lines, [line]);
  assert.deepEqual(report.result.after_lines, [line]);
  assert.deepEqual(report.result.impact.affected_targets, expected);
  assert.equal(report.result.impact.conservative, false);
  assert.equal(report.before.sha256, createHash('sha256').update(fs.readFileSync(before)).digest('hex'));
  comparisons.push({id, beforeLines: report.result.before_lines, afterLines: report.result.after_lines, targets: expected});
}

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'dockerlint-source-comparison-'));
const old = path.join(temp, 'before Dockerfile'), after = path.join(temp, 'after Dockerfile'), out = path.join(temp, 'report.json');
const source = 'FROM scratch AS a\nRUN echo one\nFROM a AS release';
fs.writeFileSync(old, source);
fs.writeFileSync(after, 'FROM scratch AS a\nFROM a AS release');
const cli = (...args) => spawnSync(process.execPath, ['tools/compare-sources-cli.mjs', ...args], {encoding: 'utf8', timeout: 10000, windowsHide: true});
const deleted = cli('--before', old, '--after', after, '--out', out);
assert.equal(deleted.status, 0, deleted.stderr);
assert.deepEqual(JSON.parse(fs.readFileSync(out, 'utf8')).result.impact.affected_targets, ['a', 'release']);
const saved = fs.readFileSync(out);
assert.equal(cli('--before', old, '--after', after, '--out', out).status, 1);
assert.deepEqual(fs.readFileSync(out), saved);
fs.writeFileSync(after, '# syntax=docker/dockerfile:1\n' + source);
assert.equal(cli('--before', old, '--after', after).status, 3);
fs.writeFileSync(after, Buffer.from([0xff]));
assert.equal(cli('--before', old, '--after', after).status, 1);
fs.writeFileSync(after, 'x'.repeat(1000001));
assert.equal(cli('--before', old, '--after', after).status, 1);
assert.equal(cli('--before', old).status, 1);
assert.equal(cli('--before', old, '--before', old, '--after', after).status, 1);
console.log(JSON.stringify({comparisons, cliChecks: ['deletion', 'output-no-overwrite', 'uncertainty-exit-3', 'invalid-utf8', 'size-limit', 'missing-argument', 'duplicate-argument'], artifacts: temp, skipBuildCertified: false}, null, 2));
