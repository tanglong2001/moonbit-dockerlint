// Run against an unmodified `git archive` of docker/getting-started at
// 94d4031393bf8ebfd38aae640910f9435579d76b. It does not build an image.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {inspectBuildContext} from './context-client.mjs';
assert(process.env.PUBLIC_DOCKER_CONTEXT,'Set PUBLIC_DOCKER_CONTEXT to the pinned archive extraction');
const r=await inspectBuildContext({context:process.env.PUBLIC_DOCKER_CONTEXT,target:'app-zip-creator',changedFiles:['app/src/index.js','requirements.txt']});
assert.equal(r.summary.missing_sources,0);assert.equal(r.summary.uncertainties,0);
assert.deepEqual(r.plan.graph.required,[1,2,3]);
assert.deepEqual(r.plan.changes[0].targets.filter(t=>t.affected).map(t=>t.target),[1,2,3,5,6]);
assert.deepEqual(r.plan.changes[1].targets.filter(t=>t.affected).map(t=>t.target),[0,4,5,6]);
const report={repository:'https://github.com/docker/getting-started',commit:'94d4031393bf8ebfd38aae640910f9435579d76b',input:'unmodified tracked-file archive',actual_docker_build:false,actual_user_claimed:false,checks:'target closure and both file-to-stage propagation sets asserted against the source Dockerfile',report:r};
if(process.env.PUBLIC_CONTEXT_REPORT)fs.writeFileSync(process.env.PUBLIC_CONTEXT_REPORT,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:'pass',summary:r.summary,required:r.plan.graph.required}));
