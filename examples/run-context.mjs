import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
const out=fs.mkdtempSync(path.join(os.tmpdir(),'docker-context-use-case-'));
const context=path.join(out,'input');fs.cpSync(fileURLToPath(new URL('./context',import.meta.url)),context,{recursive:true});
const cli=fileURLToPath(new URL('../tools/context-cli.mjs',import.meta.url));
function run(name,expected,args){
 const r=spawnSync(process.execPath,[cli,'--context',context,...args],{encoding:'utf8',timeout:35000});
 fs.writeFileSync(path.join(out,name+'.json'),r.stdout);fs.writeFileSync(path.join(out,name+'.stderr.txt'),r.stderr);
 assert.equal(r.status,expected,r.stderr);return JSON.parse(r.stdout);
}
const normal=run('normal',0,['--target','release','--changed-file','src/app.txt','--changed-file','docs/manual.md']);
assert.deepEqual(normal.plan.graph.required,[0,2]);
assert.deepEqual(normal.plan.changes.map(c=>c.targets.map(t=>t.affected)),[[true,false,true],[false,true,false]]);
assert.deepEqual(normal.plan.changes[0].targets[2].path,[2,0]);
const selected=normal.plan.selected_entries.map(i=>normal.plan.entries[i].path);
assert(selected.includes('src/generated/keep.txt'));assert(!selected.includes('src/generated/drop.txt'));
// A simulated ignore edit in the new temporary copy removes a bind input.
fs.appendFileSync(path.join(context,'.dockerignore'),'\nconfig\n');
const broken=run('excluded-input',2,['--target','release']);
assert.deepEqual(broken.plan.missing_lines,[3]);assert.equal(broken.plan.inputs[1].status,'excluded');
fs.writeFileSync(path.join(out,'report.json'),JSON.stringify({status:'pass',input:'original synthetic example, not an executed Docker build',checks:['file-to-stage-to-target witness','independent docs branch','excluded directory with re-included child','ignored bind input exits 2'],normal_summary:normal.summary,excluded_summary:broken.summary},null,2)+'\n');
console.log(out);
