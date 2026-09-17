import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {spawnSync,spawn} from 'node:child_process';import {fileURLToPath} from 'node:url';
import {configured,variables} from '../web/engine.mjs';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url))),cli=path.join(root,'tools/cli.mjs');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'dockerlint-runtime-')),groups=[];
function invoke(args,input){const r=spawnSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:15000,maxBuffer:20000000});assert.equal(r.error,undefined);return r}
function file(name,text){const target=path.join(dir,name);fs.writeFileSync(target,text);return target}
function check(name,fn){fn();groups.push(name)}
try {
 const a=file('A & quoted.Dockerfile','FROM alpine:latest\nRUN apk add curl'),b=file('B.Dockerfile','FROM scratch\nUSER root');
 const config=file('config.json',JSON.stringify({ignore:['DL3018'],severity:{DL3007:'style'},trustedRegistries:['docker.io']}));
 check('multi-file JSON and configured thresholds',()=>{
  const r=invoke(['--file',a,'--file',b,'--config',config,'--format','json','--fail-on','warning']);assert.equal(r.status,3,r.stderr);
  const ds=JSON.parse(r.stdout);assert.equal(new Set(ds.map(d=>d.file)).size,2);assert(!ds.some(d=>d.code==='DL3018'));assert.equal(ds.find(d=>d.code==='DL3007').level,'style');
  for(const level of ['error','warning','info','style','none'])assert.equal(invoke(['--input','FROM alpine:3\nRUN wget -q https://example.test','--fail-on',level]).status,0);
  assert.equal(invoke(['--input','FROM alpine:3\nRUN apk add --no-cache curl=1','--fail-on','style']).status,0);
  assert.equal(invoke(['--input','FROM alpine:3\nRUN apk add curl=1','--fail-on','warning']).status,0);
  assert.equal(invoke(['--input','FROM alpine:3\nRUN apk add curl=1','--fail-on','info']).status,3);
 });
 check('SARIF rule indices and locations',()=>{
  const r=invoke(['--file',a,'--file',b,'--format','sarif']);assert.equal(r.status,0,r.stderr);const sarif=JSON.parse(r.stdout);assert.equal(sarif.version,'2.1.0');
  const run=sarif.runs[0];for(const d of run.results){assert.equal(run.tool.driver.rules[d.ruleIndex].id,d.ruleId);assert(d.locations[0].physicalLocation.region.startLine>=1)}
  assert(run.results.some(d=>d.locations[0].physicalLocation.artifactLocation.uri.includes('%26')));
  fs.writeFileSync(path.join(root,'evidence/sarif-example.json'),r.stdout);
 });
 check('Checkstyle parses with independent XML parser',()=>{
  const r=invoke(['--file',a,'--format','checkstyle']);assert.equal(r.status,0,r.stderr);
  const parsed=spawnSync('python',['-c',"import sys,xml.etree.ElementTree as E; x=E.fromstring(sys.stdin.buffer.read()); assert x.tag=='checkstyle'; assert len(x.findall('./file/error'))==3; print('ok')"],{input:r.stdout,encoding:'utf8',timeout:10000});assert.equal(parsed.status,0,parsed.stderr);
  assert(r.stdout.includes('&amp;'));
 });
 check('GNU text and parse errors remain structured',()=>{
  assert(invoke(['--file',a,'--format','gnu']).stdout.includes(':1:1: warning: DL3007'));
  const bad=file('bad.Dockerfile','FROM');const r=invoke(['--file',a,'--file',bad,'--format','sarif']);assert.equal(r.status,2);assert(JSON.parse(r.stdout).runs[0].results.some(d=>d.ruleId==='ML1099'));
 });
 check('ARG ENV file and build argument path',()=>{
  const source='ARG BASE=alpine:3\nFROM $BASE AS base\nARG VALUE=one\nENV A=$VALUE\nENV A=two B=$A\nFROM base\nWORKDIR /$B';
  const r=invoke(['--input',source,'--variables','--build-arg','VALUE=override']);assert.equal(r.status,0,r.stderr);const scopes=JSON.parse(r.stdout);assert.equal(scopes.at(-1).expanded,'/override');
  assert(variables(source,'{"VALUE":1}').startsWith('ERROR:'));
 });
 check('strict UTF-8 limits and invalid configuration',()=>{
  assert.equal(invoke(['--format','json'],Buffer.from([0xff,0xfe])).status,1);
  const invalid=file('invalid-utf8',Buffer.from([0xc0,0xaf]));assert.equal(invoke(['--file',invalid]).status,1);
  assert.equal(invoke([],Buffer.alloc(2097153,65)).status,1);
  const invalidConfig=file('bad-config','{"ignored":[]}');assert.equal(invoke(['--input','FROM scratch','--config',invalidConfig]).status,1);
  for(const args of [['--format','csv'],['--variables','--format','sarif'],['--build-arg','A=1'],['--variables','--build-arg','1BAD=x']])assert.equal(invoke(args,'FROM scratch').status,1);
 });
 check('inline ignores severity and trusted registry policies',()=>{
  let ds=JSON.parse(configured('# hadolint ignore=DL3026\nFROM ghcr.io/tool:1','{"trustedRegistries":["docker.io"]}','Dockerfile'));assert.deepEqual(ds,[]);
  ds=JSON.parse(configured('FROM ghcr.io/tool:1','{"trustedRegistries":["docker.io"],"severity":{"DL3026":"ignore"}}','Dockerfile'));assert.deepEqual(ds,[]);
  assert(configured('FROM scratch','{"ignore":["WRONG"]}','Dockerfile').startsWith('ERROR:'));
 });
 const big=file('large.Dockerfile','FROM scratch\nENV A=hello\n'+'WORKDIR /$A\n'.repeat(4000));
 const child=spawn(process.execPath,[cli,'--file',big,'--variables'],{stdio:['ignore','pipe','pipe']});let output='',errors='';
 const timer=setTimeout(()=>child.kill(),15000);
 child.stdout.setEncoding('utf8');child.stderr.setEncoding('utf8');child.stdout.on('data',chunk=>output+=chunk);child.stderr.on('data',chunk=>errors+=chunk);
 const status=await new Promise((resolve,reject)=>{child.once('error',reject);child.once('exit',resolve)});clearTimeout(timer);
 assert.equal(status,0,errors);assert.equal(JSON.parse(output).length,4002);assert(output.length>500000);groups.push('large stdout drained without truncation');
 const oversized='FROM scratch\nENV A='+ 'x'.repeat(10000)+'\n'+'WORKDIR /a\n'.repeat(1000);
 assert(variables(oversized,'{}').startsWith('ERROR:'));groups.push('scope snapshot output budget');
 fs.writeFileSync(path.join(root,'evidence/runtime-validation.json'),JSON.stringify({runtime:process.version,platform:process.platform,groups,passed:groups.length,largeOutputBytes:Buffer.byteLength(output)},null,2)+'\n');
 console.log(groups.length+' runtime/CLI groups passed');
} finally {
 for(const name of fs.readdirSync(dir))fs.unlinkSync(path.join(dir,name));fs.rmdirSync(dir);
}
