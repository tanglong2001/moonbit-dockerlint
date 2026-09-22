import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import test from 'node:test';
import {inspectBuildContext} from './context-client.mjs';
import {makeDockerIgnore} from './docker-ignore-adapter.mjs';

const cli=fileURLToPath(new URL('./context-cli.mjs',import.meta.url));
function fixture(t,files){
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-context-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  for(const [name,data] of Object.entries(files)){const file=path.join(root,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,data)}
  return root;
}
const call=(root,...args)=>spawnSync(process.execPath,[cli,'--context',root,...args],{encoding:'utf8',timeout:35000});
test('a complete inventory explains release inputs and an independent docs target',async t=>{
  const root=fixture(t,{'Dockerfile':'FROM scratch AS compile\nCOPY src /src\nRUN --mount=source=config,target=/cfg true\nFROM scratch AS docs\nCOPY docs /docs\nFROM scratch AS release\nCOPY --from=compile /app /app\n','.dockerignore':'**/*.tmp\nsrc/generated\n!src/generated/keep.mbt\n','src/main.mbt':'main','src/drop.tmp':'no','src/generated/drop.mbt':'no','src/generated/keep.mbt':'keep','config/build.json':'{}','docs/manual.md':'help'});
  const r=await inspectBuildContext({context:root,target:'release',changedFiles:['src/main.mbt','docs/manual.md','src/deleted.mbt','src/drop.tmp']});
  assert.equal(r.summary.missing_sources,0);assert.equal(r.summary.uncertainties,0);
  const selected=r.plan.selected_entries.map(i=>r.plan.entries[i].path);
  assert(selected.includes('src/generated/keep.mbt'));assert(!selected.includes('src/generated/drop.mbt'));assert(!selected.includes('docs/manual.md'));
  assert.deepEqual(r.plan.changes.map(c=>c.targets.map(t=>t.affected)),[[true,false,true],[false,true,false],[true,false,true],[false,false,false]]);
  assert.deepEqual(r.plan.changes[0].targets[2].path,[2,0]);
  assert.equal(r.summary.selected_known_file_bytes,'10');
});
test('Dockerfile-specific ignore overrides the root file and Linux matching is case sensitive',async t=>{
  const root=fixture(t,{'build/Dockerfile':'FROM scratch\nCOPY ["Name", "/file"]','.dockerignore':'*\n','build/Dockerfile.dockerignore':'name\n','Name':'yes'});
  const r=await inspectBuildContext({context:root,dockerfile:'build/Dockerfile',changedFiles:['.dockerignore','build/Dockerfile.dockerignore']});
  assert.equal(r.ignore_file,'build/Dockerfile.dockerignore');assert.equal(r.summary.missing_sources,0);
  assert.equal(r.plan.entries.find(e=>e.path==='Name').excluded,false);
  assert.equal(makeDockerIgnore('name\n').ignores('name'),true);
  assert.equal(r.plan.changes[0].targets[0].affected,false);
  assert.equal(r.plan.changes[1].conservative,true);
});
test('CLI distinguishes excluded, missing, unknown and successful sources',t=>{
  const root=fixture(t,{'Dockerfile':'FROM scratch\nCOPY wanted /out','.dockerignore':'wanted\n','wanted':'yes'});
  let r=call(root);assert.equal(r.status,2,r.stderr);assert.equal(JSON.parse(r.stdout).plan.inputs[0].status,'excluded');
  fs.unlinkSync(path.join(root,'wanted'));r=call(root);assert.equal(r.status,2,r.stderr);assert.equal(JSON.parse(r.stdout).plan.inputs[0].status,'missing');
  fs.writeFileSync(path.join(root,'Dockerfile'),'FROM scratch\nCOPY $INPUT /out');r=call(root);assert.equal(r.status,3,r.stderr);
  fs.writeFileSync(path.join(root,'Dockerfile'),'FROM scratch\nARG INPUT=missing\nCOPY $INPUT /out');fs.writeFileSync(path.join(root,'actual'),'yes');
  r=call(root,'--build-arg','INPUT=actual');assert.equal(r.status,0,r.stderr);assert.equal(JSON.parse(r.stdout).plan.inputs[0].source,'actual');
});
test('CLI preserves literal COPY names and reports uncertainty through assignments',t=>{
  const root=fixture(t,{'Dockerfile':"FROM scratch\nARG NAME=missing\nCOPY '$NAME' /out",'$NAME':'literal','actual':'ok','$MISSING':'must not prove resolution'});
  let r=call(root);assert.equal(r.status,0,r.stderr);
  assert.equal(JSON.parse(r.stdout).plan.inputs[0].source,'$NAME');
  fs.writeFileSync(path.join(root,'Dockerfile'),'FROM scratch\nARG FIRST=$MISSING\nENV SECOND=$FIRST\nCOPY $SECOND /out');
  r=call(root);assert.equal(r.status,3,r.stderr);assert.equal(JSON.parse(r.stdout).plan.inputs[0].status,'unknown');
  fs.writeFileSync(path.join(root,'Dockerfile'),'FROM alpine\nARG NAME=actual\nCOPY $NAME /out');
  r=call(root);assert.equal(r.status,3,r.stderr);
  fs.appendFileSync(path.join(root,'Dockerfile'),'\nENV NAME=actual\nCOPY $NAME /another');
  r=call(root);const inputs=JSON.parse(r.stdout).plan.inputs;assert.deepEqual(inputs.map(i=>i.status),['unknown','resolved']);
});
test('reports are reproducible and cannot overwrite an existing output',t=>{
  const root=fixture(t,{'Dockerfile':'FROM scratch\nCOPY src /out','src/a':'a'}),out=path.join(os.tmpdir(),path.basename(root)+'.json');
  t.after(()=>fs.rmSync(out,{force:true}));
  const first=call(root),second=call(root);assert.equal(first.status,0,first.stderr);assert.equal(first.stdout,second.stdout);
  assert.equal(call(root,'--out',out).status,0);const bytes=fs.readFileSync(out);assert.equal(call(root,'--out',out).status,1);assert.deepEqual(fs.readFileSync(out),bytes);
});
test('directory links are listed without traversing and never counted as resolved content',async t=>{
  const outside=fixture(t,{'secret':'hidden'}),root=fixture(t,{'Dockerfile':'FROM scratch\nCOPY link /out'});
  fs.symlinkSync(outside,path.join(root,'link'),process.platform==='win32'?'junction':'dir');
  const r=await inspectBuildContext({context:root,changedFiles:['unrelated']});
  assert.equal(r.plan.entries.find(e=>e.path==='link').kind,'symlink');assert(!r.plan.entries.some(e=>e.path==='link/secret'));
  assert.equal(r.plan.inputs[0].status,'unknown');assert.equal(r.plan.changes[0].conservative,true);
  fs.writeFileSync(path.join(outside,'Dockerfile'),'FROM scratch');
  await assert.rejects(inspectBuildContext({context:root,dockerfile:'link/Dockerfile'}),/outside context/);
});
test('invalid options, paths and source encoding fail through worker boundary',async t=>{
  const root=fixture(t,{'Dockerfile':'FROM scratch'});
  await assert.rejects(inspectBuildContext({context:root,dockerfile:'../Dockerfile'}),/inside/);
  await assert.rejects(inspectBuildContext({context:root,changedFiles:['a/../b']}),/canonical/);
  await assert.rejects(inspectBuildContext({context:root,buildArgs:{a:4}}),/Invalid/);
  assert.equal(call(root,'--target','a','--target','b').status,1);
  fs.writeFileSync(path.join(root,'.dockerignore'),'[^x]');
  await assert.rejects(inspectBuildContext({context:root}),/Unsupported ignore syntax/);
  fs.unlinkSync(path.join(root,'.dockerignore'));
  fs.writeFileSync(path.join(root,'Dockerfile'),Buffer.from([0xff]));
  await assert.rejects(inspectBuildContext({context:root}),/encoded data/);
});
