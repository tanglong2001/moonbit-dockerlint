import fs from 'node:fs';import {createHash} from 'node:crypto';import {configured} from '../web/engine.mjs';
const reference=JSON.parse(fs.readFileSync(new URL('../evidence/hadolint-reference.json',import.meta.url)));
const owned=new Set(['DL3000','DL3001','DL3002','DL3003','DL3004','DL3006','DL3007','DL3008','DL3009','DL3011','DL3012','DL3013','DL3014','DL3015','DL3016','DL3018','DL3019','DL3020','DL3021','DL3023','DL3024','DL3025','DL3026','DL3027','DL3028','DL3029','DL3030','DL3032','DL3033','DL3034','DL3035','DL3036','DL3037','DL3038','DL3040','DL3041','DL3042','DL3043','DL3044','DL3047','DL3062','DL4000','DL4003','DL4004','DL4005','DL4006']);
const select=ds=>ds.filter(d=>owned.has(d.code)).map(d=>[d.code,d.line,d.level]).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));
const differences=JSON.parse(fs.readFileSync(new URL('./reference-differences.json',import.meta.url)));
const rows=reference.cases.map(c=>{const text=configured(c.source,JSON.stringify(c.config),'Dockerfile');const actual=text.startsWith('ERROR:')?text:JSON.parse(text);const comparable=!c.reference.some(d=>d.code==='DL1000');return {...c,actual,comparable,match:comparable&&Array.isArray(actual)&&JSON.stringify(select(actual))===JSON.stringify(select(c.reference)),outOfScope:c.reference.filter(d=>!owned.has(d.code))}});
const report={reference:reference.version,binarySHA256:reference.binarySHA256,compared:'code, instruction line and default severity for explicitly owned DL rules; all reference findings retained',owned:[...owned],total:rows.length,matched:rows.filter(r=>r.match).length,mismatches:rows.filter(r=>!r.match).length,outOfScopeFindings:rows.reduce((n,r)=>n+r.outOfScope.length,0),cases:rows};
report.comparable=rows.filter(r=>r.comparable).length;
report.referenceParseErrors=rows.filter(r=>!r.comparable).length;
for(const row of rows.filter(r=>r.comparable&&!r.match)){
 const difference=differences[row.name];
 if(difference&&Array.isArray(row.actual)&&difference.sourceSHA256===createHash('sha256').update(row.source).digest('hex')&&JSON.stringify(select(row.actual))===JSON.stringify(difference.expectedActual)&&JSON.stringify(select(row.reference))===JSON.stringify(difference.expectedReference))row.intentionalDifference=difference.reason;
}
report.intentionalDifferences=rows.filter(r=>r.intentionalDifference).length;
report.unexplainedDifferences=rows.filter(r=>r.comparable&&!r.match&&!r.intentionalDifference).length;
report.mismatches=report.comparable-report.matched;
fs.writeFileSync(new URL('../evidence/hadolint-comparison.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({total:report.total,comparable:report.comparable,matched:report.matched,intentionalDifferences:report.intentionalDifferences,unexplainedDifferences:report.unexplainedDifferences,referenceParseErrors:report.referenceParseErrors,outOfScopeFindings:report.outOfScopeFindings}));
for(const row of rows.filter(r=>r.comparable&&!r.match&&!r.intentionalDifference))console.log(JSON.stringify({name:row.name,source:row.source,expected:select(row.reference),actual:Array.isArray(row.actual)?select(row.actual):row.actual}));
process.exitCode=report.unexplainedDifferences?1:0;
