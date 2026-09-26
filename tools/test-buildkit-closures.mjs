import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {impact,compare_impact} from '../web/engine.mjs';
const folder=new URL('../examples/buildkit-closures/',import.meta.url);
const oracle=JSON.parse(fs.readFileSync(new URL('oracle.json',folder),'utf8'));
const parse=s=>{assert.ok(!s.startsWith('ERROR:'),s);return JSON.parse(s);};
const closures=[];let impactMembershipChecks=0;
const stageLines=[5,10,16,22,30,34,40];
// CMD-only dev has no independently labelled filesystem LLB vertex. Include
// the explicitly selected target, and expose this observation limit in output.
const comparableClosure=ref=>[...new Set([...ref.stage_closure,ref.target.name])].sort();
for(const variant of oracle.variants){
  const bytes=fs.readFileSync(new URL(variant.id+'.Dockerfile',folder));
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),variant.source_sha256);
  const source=bytes.toString('utf8');
  const names=variant.stage_targets.map(t=>t.name);
  for(const reference of variant.targets){
    const actual=parse(impact(source,reference.target.config_target,[]));
    const found=actual.required.map(i=>names[i]).sort();
    assert.deepEqual(found,comparableClosure(reference));
    closures.push({variant:variant.id,target:reference.target.name,stages:found,observedOperationStages:reference.stage_closure,selectedTargetExplicitlyIncluded:true});
  }
  for(let changed=0;changed<7;changed++){
    const actual=parse(impact(source,'',[stageLines[changed]]));
    assert.equal(actual.conservative,false);
    for(const ref of variant.targets){
      assert.equal(actual.targets[ref.target.index].affected,comparableClosure(ref).includes(names[changed]));
      impactMembershipChecks++;
    }
  }
}
const before=fs.readFileSync(new URL('original.Dockerfile',folder),'utf8');
const comparisons=[];
for(const [id,line] of [['copy-test-to-app-base',22],['copy-appzip-to-app-base',40]]){
  const after=fs.readFileSync(new URL(id+'.Dockerfile',folder),'utf8');
  const result=parse(compare_impact(before,after,[line],[line]));
  const expected=id==='copy-test-to-app-base'?['app-zip-creator','#6']:['#6'];
  assert.deepEqual(result.affected_targets,expected);
  assert.equal(result.conservative,false);
  comparisons.push({variant:id,line,affectedTargets:result.affected_targets,oldClosure:result.before.required,newClosure:result.after.required});
}
console.log(JSON.stringify({reference:oracle.upstream,resolver:oracle.resolver,closures:closures.length,impactMembershipChecks,comparisons,results:closures,actualBuildPerformed:false,skipBuildCertified:false},null,2));
