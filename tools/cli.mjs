import fs from 'node:fs';
import {run,configured,stage_graph,variables} from '../web/engine.mjs';
import {formatReport} from './formats.mjs';
const argv=process.argv.slice(2), sources=[], buildArgs=Object.create(null);
let json=false,mode='text',format,threshold='none',config={},configPath,inline=true,total=0;
const levels={error:0,warning:1,info:2,style:3,none:-1};
const utf8=new TextDecoder('utf-8',{fatal:true});
function decode(bytes){if(bytes.length>2097152)throw Error('Input exceeds 2 MiB');total+=bytes.length;if(total>16777216)throw Error('Total input exceeds 16 MiB');return utf8.decode(bytes)}
function read(file){if(fs.statSync(file).size>2097152)throw Error('Input exceeds 2 MiB');return decode(fs.readFileSync(file))}
async function write(text){await new Promise((resolve,reject)=>process.stdout.write(text,e=>e?reject(e):resolve()))}
try {
 for(let i=0;i<argv.length;i++){
  const a=argv[i];
  const value=()=>{if(i+1>=argv.length)throw Error('Missing value for '+a);return argv[++i]};
  if(a==='--help'){await write('Usage: node tools/cli.mjs [--input TEXT | --file PATH ...] [--json] [--diagnostics | --stages | --variables] [--format json|sarif|checkstyle|gnu|text] [--config JSON_FILE] [--no-inline] [--build-arg KEY=VALUE] [--fail-on error|warning|info|style|none]\nNo source: strict UTF-8 stdin. Config keys: ignore, honorInline, severity, trustedRegistries. Exit: 0 completed, 1 host/config error, 2 parse error, 3 threshold reached.\n');process.exit(0)}
  else if(a==='--json')json=true;
  else if(a==='--no-inline')inline=false;
  else if(['--diagnostics','--stages','--variables'].includes(a)){if(mode!=='text')throw Error('Choose one report mode');mode=a.slice(2)}
  else if(a==='--format'){format=value();if(!['json','sarif','checkstyle','gnu','text'].includes(format))throw Error('Invalid format')}
  else if(a==='--fail-on'){threshold=value();if(!Object.hasOwn(levels,threshold))throw Error('Invalid failure threshold')}
  else if(a==='--config'){if(configPath)throw Error('Duplicate config');configPath=value()}
  else if(a==='--build-arg'){const item=value(),at=item.indexOf('=');if(at<1||!/^[_a-zA-Z][_a-zA-Z0-9]*$/.test(item.slice(0,at)))throw Error('Expected build argument KEY=VALUE');buildArgs[item.slice(0,at)]=item.slice(at+1)}
  else if(a==='--input'){if(sources.length)throw Error('Exactly one --input source is required');sources.push({file:'Dockerfile',input:value(),direct:true})}
  else if(a==='--file'){if(sources.some(s=>s.direct))throw Error('Cannot mix --input and --file');sources.push({file:value()});if(sources.length>256)throw Error('File count limit')}
  else throw Error('Unknown argument: '+a);
 }
 if(format && !['text','diagnostics'].includes(mode))throw Error('Format is only supported for diagnostics');
 if(mode!=='variables' && Object.keys(buildArgs).length)throw Error('--build-arg requires --variables');
 if(configPath)config=JSON.parse(read(configPath));
 if(!config||typeof config!=='object'||Array.isArray(config))throw Error('Configuration must be an object');
 if(!inline)config.honorInline=false;
 const configText=JSON.stringify(config),validation=configured('FROM scratch',configText,'Dockerfile');
 if(validation.startsWith('ERROR:'))throw Error(validation);
 if(!sources.length){const chunks=[];let size=0;for await(const chunk of process.stdin){size+=chunk.length;if(size>2097152)throw Error('Input exceeds 2 MiB');chunks.push(chunk)}sources.push({file:'Dockerfile',input:decode(Buffer.concat(chunks))})}
 const reports=[], outputs=[];let ok=true;
 for(const source of sources){
  const input=source.input??read(source.file);
  if(Buffer.byteLength(input)>2097152)throw Error('Input exceeds 2 MiB');
  const report=configured(input,configText,source.file);
  if(report.startsWith('ERROR:')){if(format||mode==='diagnostics')reports.push({file:source.file,line:1,code:'ML1099',level:'error',message:report});else outputs.push(report);ok=false;continue}
  reports.push(...JSON.parse(report));
  const result=mode==='stages'?stage_graph(input):mode==='variables'?variables(input,JSON.stringify(buildArgs)):null;
  if(result!==null){outputs.push(sources.length===1?result:JSON.stringify({file:source.file,result:result.startsWith('ERROR:')?result:JSON.parse(result)}));if(result.startsWith('ERROR:'))ok=false}
  else if(mode==='text'&&!format&&!configPath&&inline&&sources.length===1)outputs.push(run(input));
 }
 let output=outputs.length?outputs.join('\n'):formatReport(reports,format??(mode==='diagnostics'?'json':'text'));
 await write(json?JSON.stringify({ok,output})+'\n':output+(output.endsWith('\n')?'':'\n'));
 process.exitCode=!ok?2:threshold!=='none'&&reports.some(d=>levels[d.level]<=levels[threshold])?3:0;
}catch(e){process.stderr.write(JSON.stringify({ok:false,error:String(e.message||e)})+'\n');process.exitCode=1}
