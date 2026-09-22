import assert from 'node:assert/strict';
import test from 'node:test';
import {context_plan,variables} from '../web/engine.mjs';

const inventory=['$NAME','actual','prefix$NAME','prefixactual','space name',"a'b",'$MISSING','fallback','known'];
function plan(source,args={}) {
  const raw=context_plan(source,JSON.stringify(inventory.map(path=>({path,kind:'file',excluded:false}))),'',JSON.stringify([{path:'other',excluded:false}]),JSON.stringify(args),'[]');
  assert(!raw.startsWith('ERROR:'),raw);return JSON.parse(raw);
}
test('COPY keeps single double and concatenated quote meaning through expansion',()=>{
  const p=plan(`FROM scratch\nARG NAME=actual\nCOPY '$NAME' /out\nCOPY "$NAME" /out\nCOPY prefix'$NAME' /out\nCOPY prefix"$NAME" /out\nCOPY ["space name", "/out"]`);
  assert.deepEqual(p.inputs.map(i=>i.source),['$NAME','actual','prefix$NAME','prefixactual','space name']);
  assert(p.inputs.every(i=>i.status==='resolved'));
  assert.equal(p.changes[0].conservative,false);
});
test('uncertainty survives ARG ENV and inherited named stages',()=>{
  const source='FROM scratch AS base\nARG FIRST=$MISSING\nENV SECOND=$FIRST\nFROM base AS child\nARG FIRST\nCOPY $SECOND /out\nCOPY ${FIRST:-actual} /out';
  const p=plan(source);assert(p.inputs.every(i=>i.status==='unknown'));
  assert.equal(p.changes[0].conservative,true);assert(p.changes[0].targets.every(t=>t.affected));
  const scopes=JSON.parse(variables(source,'{}'));
  assert.deepEqual(scopes[4].uncertain_arguments,['FIRST']);assert.deepEqual(scopes[4].uncertain_environment,['SECOND']);
});
test('literal dollar data is known and explicit assignments clear uncertainty',()=>{
  const p=plan("FROM scratch\nARG FIRST=$MISSING\nENV SECOND=$FIRST\nARG FIRST=actual\nENV SECOND='known' LITERAL='$MISSING'\nCOPY $FIRST /out\nCOPY $SECOND /out\nCOPY $LITERAL /out");
  assert.deepEqual(p.inputs.map(i=>[i.source,i.status]),[['actual','resolved'],['known','resolved'],['$MISSING','resolved']]);
});
test('global ARG uncertainty survives redeclaration but an explicit build argument clears it',()=>{
  const source='ARG INPUT=$MISSING\nFROM scratch\nARG INPUT\nCOPY $INPUT /out';
  assert.equal(plan(source).inputs[0].status,'unknown');
  assert.equal(plan(source,{INPUT:'actual'}).inputs[0].status,'resolved');
});
test('unfetched image ENV may shadow an ARG or change a fallback',()=>{
  const p=plan('FROM alpine AS base\nARG NAME=actual\nCOPY $NAME /out\nCOPY ${INPUT:-fallback} /out\nENV NAME=known OTHER=${NAME:-fallback}\nCOPY $NAME /out\nCOPY $OTHER /out\nFROM base AS child\nCOPY $NAME /out\nFROM scratch\nARG NAME=actual\nCOPY $NAME /out');
  assert.deepEqual(p.inputs.map(i=>i.status),['unknown','unknown','resolved','unknown','resolved','resolved']);
  assert.deepEqual(p.inputs.filter(i=>i.status==='resolved').map(i=>i.source),['known','known','actual']);
});
test('an uncertain ADD expression cannot masquerade as a definitely remote input',()=>{
  const p=plan('FROM alpine\nADD ${INPUT:-https://example.invalid/file} /out');
  assert.equal(p.inputs[0].status,'unknown');assert.equal(p.changes[0].conservative,true);
  assert.equal(plan('FROM scratch\nADD https://example.invalid/file /out').inputs[0].status,'external');
});
test('nondefault expansion escapes and empty expanded FROM fail with structured errors',()=>{
  for(const source of ['# escape=`\nFROM scratch\nCOPY `$NAME /out',"ARG BASE=''\nFROM $BASE"]){
    const raw=context_plan(source,'[]','','[]','{}','[]');assert(raw.startsWith('ERROR:'),raw);
  }
});
test('quoted shell whitespace is not mistaken for Docker COPY JSON syntax',()=>{
  const p=plan("FROM scratch\nCOPY 'space name' /out");
  assert.equal(p.inputs[0].status,'unknown');assert.match(p.inputs[0].note,/JSON form/);
});
