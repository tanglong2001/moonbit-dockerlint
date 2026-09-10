import fs from 'node:fs';
import {run,diagnostics,stage_graph} from '../web/engine.mjs';
const args=process.argv.slice(2);let input, json=false, mode='text', honorInline=true, threshold='none', filename='Dockerfile';
try {
 for(let i=0;i<args.length;i++){
  const a=args[i];
  if(a==='--help'){process.stdout.write('Usage: node tools/cli.mjs [--input TEXT | --file PATH] [--json] [--diagnostics | --stages] [--no-inline] [--fail-on error|warning|none]\nWithout --input/--file, reads UTF-8 stdin. Exit: 0 success, 2 parse/stage error, 3 lint threshold reached, 1 host error.\n');process.exit(0)}
  else if(a==='--json')json=true;
  else if(a==='--no-inline')honorInline=false;
  else if(a==='--diagnostics'||a==='--stages'){if(mode!=='text')throw new Error('Choose one report mode');mode=a==='--stages'?'stages':'diagnostics'}
  else if(a==='--fail-on'){if(i+1>=args.length)throw new Error('Missing failure threshold');threshold=args[++i];if(!['error','warning','none'].includes(threshold))throw new Error('Invalid failure threshold')}
  else if(a==='--input'||a==='--file'){
   if(input!==undefined||i+1>=args.length)throw new Error('Exactly one input source is required');
   const value=args[++i];
   if(a==='--file'){filename=value;if(fs.statSync(value).size>2097152)throw new Error('Input exceeds 2 MiB');input=fs.readFileSync(value,'utf8')}else input=value;
  }else throw new Error('Unknown argument: '+a);
 }
 if(input===undefined){let size=0;const chunks=[];for await(const chunk of process.stdin){size+=chunk.length;if(size>2097152)throw new Error('Input exceeds 2 MiB');chunks.push(chunk)}input=Buffer.concat(chunks).toString('utf8')}
 if(Buffer.byteLength(input)>2097152)throw new Error('Input exceeds 2 MiB');
 const report=diagnostics(input,filename,honorInline);
 const reportOk=!report.startsWith('ERROR:');
 const output=!reportOk?report:mode==='stages'?stage_graph(input):mode==='diagnostics'?report:honorInline?run(input):JSON.parse(report).map(d=>`L${d.line}  ${d.level}  ${d.code}  ${d.message}`).join('\n');
 const ok=!output.startsWith('ERROR:');
 process.stdout.write(json?JSON.stringify({ok,output})+'\n':output+(output.endsWith('\n')?'':'\n'));
 process.exitCode=!ok?2:threshold!=='none'&&JSON.parse(report).some(d=>threshold==='warning'||d.level==='error')?3:0;
}catch(e){process.stderr.write(JSON.stringify({ok:false,error:String(e.message||e)})+'\n');process.exitCode=1}
