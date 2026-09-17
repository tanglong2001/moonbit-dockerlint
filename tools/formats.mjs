const xml=s=>String(s).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'\uFFFD').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function formatReport(findings,format='text'){
 const entries=[...findings].sort((a,b)=>a.file.localeCompare(b.file)||a.line-b.line||a.code.localeCompare(b.code));
 if(format==='json')return JSON.stringify(entries);
 if(format==='gnu')return entries.map(d=>`${d.file}:${d.line}:1: ${d.level}: ${d.code} ${d.message}`).join('\n');
 if(format==='checkstyle'){
  const files=new Map();for(const d of entries){if(!files.has(d.file))files.set(d.file,[]);files.get(d.file).push(d)}
  return '<?xml version="1.0" encoding="UTF-8"?>\n<checkstyle version="4.3">'+[...files].map(([file,ds])=>`<file name="${xml(file)}">`+ds.map(d=>`<error line="${d.line}" column="1" severity="${d.level==='error'?'error':d.level==='warning'?'warning':'info'}" message="${xml(d.message)}" source="${xml(d.code)}"/>`).join('')+'</file>').join('')+'</checkstyle>';
 }
 if(format==='sarif'){
  const codes=[...new Set(entries.map(d=>d.code))];
  return JSON.stringify({$schema:'https://json.schemastore.org/sarif-2.1.0.json',version:'2.1.0',runs:[{tool:{driver:{name:'moonbit-dockerlint',version:'0.4.0',rules:codes.map(id=>({id,shortDescription:{text:id}}))}},results:entries.map(d=>({ruleId:d.code,ruleIndex:codes.indexOf(d.code),level:d.level==='error'?'error':d.level==='warning'?'warning':'note',message:{text:d.message},locations:[{physicalLocation:{artifactLocation:{uri:d.file.replaceAll('\\','/').split('/').map(encodeURIComponent).join('/')},region:{startLine:d.line,startColumn:1}}}]}))}]});
 }
 return entries.map(d=>`${d.file}:L${d.line}  ${d.level}  ${d.code}  ${d.message}`).join('\n');
}
