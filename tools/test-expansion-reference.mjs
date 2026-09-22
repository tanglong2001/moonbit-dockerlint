// Pinned BuildKit shell.ProcessWord is an independent expansion reference.
// This does not invoke its Dockerfile parser, image resolver or builder.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {context_plan} from '../web/engine.mjs';

assert(process.env.EXPANSION_ORACLE_WASM&&process.env.GO_WASM_EXEC_NODE,'Set EXPANSION_ORACLE_WASM and GO_WASM_EXEC_NODE');
const env={NAME:'actual',EMPTY:'',SPACE:'space name',DOLLAR:'$LITERAL'};
const expressions=['plain','$NAME',"'$NAME'",'"$NAME"',"pre'$NAME'",'pre"$NAME"','${NAME:-fallback}','${NONE:-fallback}','${EMPTY:-fallback}','${EMPTY-fallback}',
  '"plain"',"'plain'",'"a\'b"',"a\\'b",'$SPACE','${NONE:-space name}','$DOLLAR','文','${NAME:+yes}','${EMPTY:+no}','${EMPTY+yes}','${NONE+yes}',
  '${NAME:-${NONE}}','${NONE:-${NAME}}',"'a b'",'"$name"','${name:-lowercase}'];
const request=[{words:expressions,env:Object.entries(env).map(([k,v])=>`${k}=${v}`)}];
const result=spawnSync(process.execPath,[process.env.GO_WASM_EXEC_NODE,process.env.EXPANSION_ORACLE_WASM],{input:JSON.stringify(request),encoding:'utf8',timeout:60000});
assert.equal(result.status,0,result.stderr);const expected=JSON.parse(result.stdout)[0];
const results=[];
for(let i=0;i<expressions.length;i++)for(const command of ['COPY','ADD'])for(const form of ['json','shell']) {
  const word=expressions[i];
  // Shell COPY/ADD uses whitespace separators; escapes and whitespace groups
  // remain explicitly unsupported here, rather than calling them matches.
  if(form==='shell'&&(/[\s\\]/.test(word)))continue;
  const source='FROM scratch\n'+Object.keys(env).map(k=>`ARG ${k}`).join('\n')+'\n'+command+' '+(form==='json'?JSON.stringify([word,'/out']):word+' /out');
  const raw=context_plan(source,'[]','','[]',JSON.stringify(env),'[]');
  assert(!raw.startsWith('ERROR:'),raw);
  const input=JSON.parse(raw).inputs[0];
  // Missing names deliberately stay unknown instead of BuildKit's empty
  // substitution. Compare known expansions; retain that policy difference.
  if(word==='"$name"') {
    assert.equal(input.status,'unknown');results.push({command,form,word,reference:expected[i],actual:input.source,policy:'unknown name retained'});continue;
  }
  assert.equal(input.source,expected[i],`${command} ${form} ${word}`);
  if(expected[i])assert.notEqual(input.status,'unknown',`${command} ${form} ${word}: ${input.note}`);
  results.push({command,form,word,reference:expected[i],actual:input.source,policy:'equal'});
}
const report={reference:'BuildKit v0.25.1 shell.ProcessWord; Go js/wasm (case sensitive env)',scope:'known COPY/ADD source expression expansion only; no Dockerfile parse, image resolution or build',
  request,matched:results.filter(r=>r.policy==='equal').length,explicit_unknown_policy:results.filter(r=>r.policy!=='equal').length,results,
  engine_sha256:createHash('sha256').update(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex')};
if(process.env.EXPANSION_REFERENCE_REPORT)fs.writeFileSync(process.env.EXPANSION_REFERENCE_REPORT,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({matched:report.matched,explicit_unknown_policy:report.explicit_unknown_policy}));
