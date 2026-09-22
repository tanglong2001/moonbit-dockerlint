import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {createRequire} from 'node:module';

// Reuse the pinned Apache-2.0/MIT package without forking its matching engine.
// Its only import is node:path. Inject path.posix to describe Linux contexts
// identically on Windows and Linux. Never evaluate Dockerfile or ignore text.
const require=createRequire(import.meta.url),module={exports:{}};
const filename=require.resolve('@balena/dockerignore');
const source=fs.readFileSync(filename,'utf8');
vm.runInThisContext('(function(require,module,exports){'+source+'\n})',{filename})(
  name=>{if(name==='path')return path.posix;throw Error('Unexpected dockerignore dependency: '+name)},module,module.exports);

export function makeDockerIgnore(text){
  if(typeof text!=='string'||Buffer.byteLength(text)>65536||text.includes('\0'))throw Error('Ignore file exceeds limits');
  const lines=text.replace(/^\uFEFF/,'').split(/\r?\n/);
  if(lines.length>2048||lines.some(line=>line.length>2048))throw Error('Ignore rule count/length limit');
  // The reused 2020 matcher has known regex/class/Unicode differences from
  // modern Moby. Fail explicitly outside the verified subset; never quietly
  // decide a source is excluded using semantics we have not established.
  const active=lines.filter(line=>!line.startsWith('#'));
  if(active.some(line=>line.trim()==='!'))throw Error('Invalid ignore rule: empty negation');
  if(active.some(line=>/[\[\]\\(){}+|^$]/.test(line)))throw Error('Unsupported ignore syntax: character classes, escapes and regex metacharacters require Moby; use simple literals, *, **, ?, / and leading !');
  const matcher=module.exports({ignorecase:false}).add(lines),hasQuestion=active.some(line=>line.includes('?'));
  return {ignores(file){
    if(hasQuestion&&/[\u{10000}-\u{10ffff}]/u.test(file))throw Error('Unsupported ignore syntax: ? with non-BMP filenames requires Moby');
    return matcher.ignores(file);
  }};
}
