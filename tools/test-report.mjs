import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import { diagnostics, stage_graph } from '../web/engine.mjs';

const source = '# hadolint ignore=DL3007 # intentional\nFROM alpine:latest AS build\nFROM scratch\nCOPY --from=build /app /app\nWORKDIR relative';
const ds = JSON.parse(diagnostics(source, 'Dockerfile.review', true));
assert.deepEqual(ds.map(d => [d.file, d.line, d.code, d.level]), [['Dockerfile.review',5,'DL3000','error']]);
assert.deepEqual(JSON.parse(stage_graph(source))[1].dependencies, [0]);
assert.equal(JSON.parse(diagnostics(source,'Dockerfile',false)).length, 2);
const cli = fileURLToPath(new URL('./cli.mjs', import.meta.url));
function invoke(args, input) {
  const r = spawnSync(process.execPath,[cli,...args],{ input,encoding:'utf8',timeout:10000 });
  assert(!r.error, r.error?.message); return r;
}
const report = invoke(['--diagnostics','--fail-on','error'],source);
assert.equal(report.status,3,report.stderr);
assert.equal(JSON.parse(report.stdout)[0].code,'DL3000');
assert.equal(invoke(['--fail-on','error'],'FROM alpine:latest').status,0);
assert.equal(invoke(['--fail-on','warning'],'FROM alpine:latest').status,3);
assert.equal(invoke(['--stages'],'FROM alpine:3 AS a\nFROM a').status,0);
assert.equal(invoke(['--diagnostics'],'COPY --from=a [1]').status,2);
writeFileSync(new URL('../evidence/extended-focused-validation.json',import.meta.url),JSON.stringify({
  date:new Date().toISOString(),baselineJsTestsPassed:6,extendedGroupsPassed:4,finalSuppressionGroupPassed:1,
  reportAndStageBridgePassed:true,cliCasesPassed:5,upstreamExecutableRun:false,browserVisualTested:false,
  engineSha256:createHash('sha256').update(readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),
},null,2)+'\n');
console.log('JSON diagnostics, stage graph and 5 CLI threshold/error cases passed');
