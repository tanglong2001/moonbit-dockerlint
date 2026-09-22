// Independent oracle: Go's filepath.Match and Moby patternmatcher v0.6.0.
// Build tools/context-reference with GOOS=js GOARCH=wasm, then set:
// CONTEXT_ORACLE_WASM and GO_WASM_EXEC_NODE (Go's lib/wasm/wasm_exec_node.js).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {source_matches} from '../web/engine.mjs';
import {makeDockerIgnore} from './docker-ignore-adapter.mjs';
const patterns=['','*','**','?','a*','*b','a?','a/**','**/a','**/*.txt','a/*/b','a/**/b','[a-z]','[^0-9]','[0-9a-z]','[文-语]','[😀-🙏]','[!a]','[a/]','a[[]b','a\\*b','\\?','a\\ b','[\\-]','[\\]]','[z-a]','??','*?*','*[^x]*','a//b','a[.]txt','src/*.mbt'];
const paths=['','a','b','x','3','!','/','a/','a/b','a/x/b','a/y/x/b','a.txt','a/b.txt','b/a','src/main.mbt','src/sub/main.mbt','src/文.mbt','文','语','😀','🙏','a b','a*b','a[b','?','-','a/../b','a//b','README.md','README.MD','docs','docs/file','cache','cache/keep','cache/drop','deep/cache/drop','foo.tmp','deep/foo.tmp','a.b','x/y/z','Name','name'];
patterns.push('*??','*[^x]*','*[�]','*?a','*[😀-🙏]?');
// Original generated combinations, no upstream fixture copied.
for(const a of ['a','*','?','[a-c]','[^/x]','文','😀'])for(const b of ['b','*','?','/x','[0-9]','[😀-🙏]'])patterns.push(a+b);
const rules=['','a','/a/','*.tmp','**/*.tmp','cache\n!cache/keep','*\n!cache/keep','docs/*\n!docs/file','**/cache/**','  # comment\n #notcolumnzero\n a \n','.\n/\n','Name\n','[a-c]\n','[^x]\n','**\n!**/*.mbt','\uFEFF#comment\r\na\r\n','a\n!a\na','foo/**/bar','\\!literal\n','/docs/../cache/'];
rules.push('  /a  ','cache\n  !cache/keep  ','docs//file','**a','a**b','**/**/a','src/**/main.mbt','?','a?','a/../cache','cache/**\n!cache/keep','*\n!cache\ncache/drop');
const request={pairs:patterns.flatMap(pattern=>paths.map(path=>({pattern,path}))),ignores:rules.map(rules=>({rules,paths}))};
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'moonbit-context-oracle-'));
try{
 const file=path.join(temp,'cases.json');fs.writeFileSync(file,JSON.stringify(request));
 assert(process.env.GO_WASM_EXEC_NODE&&process.env.CONTEXT_ORACLE_WASM,'Set the two oracle environment variables');
 const processResult=spawnSync(process.execPath,[process.env.GO_WASM_EXEC_NODE,process.env.CONTEXT_ORACLE_WASM,file],{encoding:'utf8',timeout:60000,maxBuffer:8*1024*1024});
 assert.equal(processResult.status,0,processResult.stderr);const expected=JSON.parse(processResult.stdout);assert.equal(expected.separator,'/');
 const differences=[];
 for(let i=0;i<request.pairs.length;i++){
  const p=request.pairs[i],raw=source_matches(p.pattern,p.path),ref=expected.pairs[i];
  if(ref.error ? !raw.startsWith('ERROR:') : raw!==JSON.stringify(ref.match))differences.push({type:'COPY',...p,actual:raw,expected:ref});
 }
 let ignorePairs=0;const rejected=[];
 for(let i=0;i<request.ignores.length;i++){
  const item=request.ignores[i];let matcher;
  try{matcher=makeDockerIgnore(item.rules)}catch(e){assert.match(e.message,/Unsupported ignore syntax/);assert(/[\[\]\\(){}+|^$]/.test(item.rules));rejected.push({rules:item.rules,error:e.message});continue}
  for(let j=0;j<paths.length;j++){
   // Context inventory excludes empty, absolute and noncanonical paths.
   if(!paths[j]||paths[j].startsWith('/')||paths[j].endsWith('/')||paths[j].split('/').some(p=>!p||p==='.'||p==='..'))continue;
   let actual;try{actual=matcher.ignores(paths[j])}catch(e){assert.match(e.message,/Unsupported ignore syntax/);assert(item.rules.includes('?')&&/[\u{10000}-\u{10ffff}]/u.test(paths[j]));rejected.push({rules:item.rules,path:paths[j],error:e.message});continue}
   ignorePairs++;const ref=expected.ignores[i][j];
   if(actual!==ref.match||ref.error)differences.push({type:'ignore',rules:item.rules,path:paths[j],actual,expected:ref});
  }
 }
 const report={reference:'Go filepath.Match (js/wasm Linux separators), Moby patternmatcher v0.6.0',copy_pairs:request.pairs.length,ignore_rule_sets:rules.length,ignore_pairs:ignorePairs,rejected_unsupported:rejected,differences};
 console.log(JSON.stringify(report,null,2));if(process.env.CONTEXT_REFERENCE_REPORT)fs.writeFileSync(process.env.CONTEXT_REFERENCE_REPORT,JSON.stringify(report,null,2)+'\n');
 assert.equal(differences.length,0,'Independent context semantics differ');
}finally{fs.rmSync(temp,{recursive:true,force:true})}
