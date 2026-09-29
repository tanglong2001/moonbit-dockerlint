import fs from 'node:fs';
import {inspectBuildContext} from './context-client.mjs';
try{
  const args=process.argv.slice(2),options={changedFiles:[],buildArgs:{}},seen=new Set();let output;
  for(let i=0;i<args.length;i++){
    const arg=args[i];
    if(arg==='--help'){
      console.log('Usage: node tools/context-cli.mjs --context DIR [--file Dockerfile] [--target NAME] [--changed-file relative/path ...] [--build-arg KEY=VALUE ...] [--platform linux/amd64 --image-profiles profiles.json] [--out NEW_REPORT.json]\nRead-only Linux build-context inventory and file-to-stage explanation. Reuses @balena/dockerignore. Optional offline profiles verify raw OCI index/manifest/config digests before refining empty ONBUILD uncertainty. No image pull or shell execution; reports are not safe-to-skip-build certificates. Exit 0: known selected inputs exist, 2: selected inputs missing/excluded, 3: analysis has uncertainties, 1: invalid input/host failure.');process.exit(0);
    }
    if(!['--context','--file','--target','--changed-file','--build-arg','--platform','--image-profiles','--out'].includes(arg)||i+1>=args.length)throw Error('Unknown/incomplete option '+arg);
    const value=args[++i];
    if(!['--changed-file','--build-arg'].includes(arg)){if(seen.has(arg))throw Error('Duplicate '+arg);seen.add(arg)}
    if(arg==='--changed-file')options.changedFiles.push(value);
    else if(arg==='--build-arg'){const at=value.indexOf('=');if(at<1)throw Error('Expected KEY=VALUE');const key=value.slice(0,at);if(Object.hasOwn(options.buildArgs,key))throw Error('Duplicate build argument');Object.defineProperty(options.buildArgs,key,{value:value.slice(at+1),enumerable:true,configurable:true,writable:true})}
    else if(arg==='--out')output=value;
    else options[{'--context':'context','--file':'dockerfile','--target':'target','--platform':'platform','--image-profiles':'imageProfiles'}[arg]]=value;
  }
  const report=await inspectBuildContext(options),text=JSON.stringify(report,null,2)+'\n';
  if(output)fs.writeFileSync(output,text,{flag:'wx'});else await new Promise((resolve,reject)=>process.stdout.write(text,e=>e?reject(e):resolve()));
  process.exitCode=report.summary.missing_sources?2:report.summary.uncertainties?3:0;
}catch(e){console.error(JSON.stringify({ok:false,error:e.message}));process.exitCode=1}
