import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {parentPort, workerData} from 'node:worker_threads';
import {compare_sources} from '../web/engine.mjs';

// Read fixed-size local snapshots, without interpreting their contents as code.
function readSnapshot(file) {
  if (typeof file !== 'string' || !file) throw Error('Expected a snapshot file path');
  const fd = fs.openSync(file, 'r');
  try {
    const stat = fs.fstatSync(fd);
    if (!stat.isFile() || stat.size > 1000000) throw Error('Snapshot must be a regular file of at most 1000000 bytes');
    const bytes = Buffer.alloc(stat.size);
    let offset = 0;
    while (offset < bytes.length) {
      const n = fs.readSync(fd, bytes, offset, bytes.length - offset, null);
      if (!n) throw Error('Snapshot shrank while reading');
      offset += n;
    }
    if (fs.readSync(fd, Buffer.alloc(1), 0, 1, null)) throw Error('Snapshot grew while reading');
    // Keep a BOM visible to the core, and reject malformed UTF-8 rather than repair it.
    return {source: new TextDecoder('utf-8', {fatal: true, ignoreBOM: true}).decode(bytes),
      sha256: createHash('sha256').update(bytes).digest('hex'), bytes: bytes.length};
  } finally { fs.closeSync(fd); }
}

try {
  const before = readSnapshot(workerData.before), after = readSnapshot(workerData.after);
  const raw = compare_sources(before.source, after.source);
  if (raw.startsWith('ERROR:')) throw Error(raw);
  parentPort.postMessage({ok: true, report: {
    format: 'moonbit-build-source-comparison/1',
    line_selection: 'entire differing span after exact common prefix/suffix; includes intervening unchanged lines',
    before: {sha256: before.sha256, bytes: before.bytes},
    after: {sha256: after.sha256, bytes: after.bytes},
    result: JSON.parse(raw),
    skip_build_certified: false,
  }});
} catch (error) { parentPort.postMessage({ok: false, error: error.message}); }
