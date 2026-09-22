import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {parentPort,workerData} from 'node:worker_threads';
import {makeDockerIgnore} from './docker-ignore-adapter.mjs';
import {context_plan} from '../web/engine.mjs';

const hash=text=>createHash('sha256').update(text).digest('hex');
function read(file,limit){
  if(fs.lstatSync(file).isSymbolicLink())throw Error('Control file must not be a symbolic link: '+file);
  const fd=fs.openSync(file,'r');
  try{
    const stat=fs.fstatSync(fd);if(!stat.isFile()||stat.size>limit)throw Error('Control file type/size limit');
    const bytes=Buffer.alloc(stat.size);let at=0;
    while(at<bytes.length){const n=fs.readSync(fd,bytes,at,bytes.length-at,null);if(!n)throw Error('Control file changed while reading');at+=n}
    if(fs.readSync(fd,Buffer.alloc(1),0,1,null))throw Error('Control file grew while reading');
    return new TextDecoder('utf-8',{fatal:true}).decode(bytes);
  }finally{fs.closeSync(fd)}
}
const inside=(root,file)=>file===root||file.startsWith(root+path.sep);
export function inspectContext({context,dockerfile='Dockerfile',target='',changedFiles=[],buildArgs={}}){
  if(typeof context!=='string'||!context||typeof dockerfile!=='string'||!dockerfile||typeof target!=='string'||
    !Array.isArray(changedFiles)||changedFiles.length>256||changedFiles.some(p=>typeof p!=='string')||
    !buildArgs||typeof buildArgs!=='object'||Array.isArray(buildArgs)||Object.keys(buildArgs).length>256||Object.entries(buildArgs).some(([k,v])=>!/^[_a-zA-Z][_a-zA-Z0-9]*$/.test(k)||typeof v!=='string'||v.length>2048))throw Error('Invalid context options');
  const root=fs.realpathSync(context),file=path.resolve(root,dockerfile);
  if(!fs.statSync(root).isDirectory()||!inside(root,file)||file===root)throw Error('Dockerfile must be inside the context directory');
  const relative=path.relative(root,file).split(path.sep).join('/');
  const specific=file+'.dockerignore',fallback=path.join(root,'.dockerignore');
  const ignorePath=fs.existsSync(specific)?specific:fs.existsSync(fallback)?fallback:null;
  for(const control of [file,ignorePath].filter(Boolean))if(!inside(root,fs.realpathSync(control)))throw Error('Control file resolves outside context');
  const source=read(file,1048576),ignoreText=ignorePath?read(ignorePath,65536):'';
  const ignore=makeDockerIgnore(ignoreText),entries=[],sizes=[];
  let totalBytes=0n,includedBytes=0n;
  function walk(dir,depth){
    if(depth>64)throw Error('Context depth limit');
    if(!inside(root,fs.realpathSync(dir)))throw Error('Directory changed outside context');
    const children=fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name<b.name?-1:a.name>b.name?1:0);
    for(const child of children){
      if(entries.length>=20000)throw Error('Context inventory limit: 20000 entries');
      const absolute=path.join(dir,child.name),relative=path.relative(root,absolute).split(path.sep).join('/');
      if(/[\x00-\x1f\x7f\\]/.test(relative)||relative.length>2048)throw Error('Unsupported context path characters/length');
      const stat=fs.lstatSync(absolute,{bigint:true});
      const kind=stat.isSymbolicLink()?'symlink':stat.isDirectory()?'directory':stat.isFile()?'file':null;
      if(kind===null)throw Error('Unsupported special filesystem entry: '+relative);
      const excluded=ignore.ignores(relative);
      entries.push({path:relative,kind,excluded});sizes.push(kind==='file'?stat.size.toString():'0');
      if(kind==='file'){totalBytes+=stat.size;if(!excluded)includedBytes+=stat.size}
      // Do not prune excluded directories: a later ! rule can re-include a child.
      if(kind==='directory')walk(absolute,depth+1);
    }
  }
  walk(root,0);
  const changes=changedFiles.map(file=>{
    if(!file||file.startsWith('/')||file.includes('\\')||file.split('/').some(p=>!p||p==='.'||p==='..'))throw Error('Changed paths must be canonical context-relative slash paths');
    return {path:file,excluded:ignore.ignores(file)};
  });
  const controls=[relative,relative+'.dockerignore'];
  if(ignorePath!==specific)controls.push('.dockerignore');
  const raw=context_plan(source,JSON.stringify(entries),target,JSON.stringify(changes),JSON.stringify(buildArgs),JSON.stringify([...new Set(controls)]));
  if(raw.startsWith('ERROR:'))throw Error(raw);
  const plan=JSON.parse(raw);
  const selectedBytes=plan.selected_entries.reduce((sum,i)=>sum+BigInt(sizes[i]),0n);
  return {format:'moonbit-build-context/1',semantics:'Linux paths; current Dockerfile and current ignore rules; static explanation, not a skip-build proof',
    dockerfile:relative,ignore_file:ignorePath?path.relative(root,ignorePath).split(path.sep).join('/'):null,
    source_sha256:hash(source),ignore_sha256:hash(ignoreText),inventory_sha256:hash(JSON.stringify(entries.map((e,i)=>({...e,bytes:sizes[i]})))),
    summary:{entries:entries.length,files:entries.filter(e=>e.kind==='file').length,total_file_bytes:totalBytes.toString(),included_file_bytes:includedBytes.toString(),selected_known_file_bytes:selectedBytes.toString(),missing_sources:plan.missing_lines.length,uncertainties:plan.uncertainties.length},
    sizes,plan};
}
if(parentPort){
  try{parentPort.postMessage({ok:true,report:inspectContext(workerData)})}
  catch(e){parentPort.postMessage({ok:false,error:e.message})}
}
