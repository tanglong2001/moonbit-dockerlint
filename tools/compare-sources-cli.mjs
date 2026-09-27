import fs from 'node:fs';
import {compareDockerfileSources} from './compare-sources.mjs';

try {
  const args = process.argv.slice(2), options = {}, seen = new Set();
  for (let i = 0; i < args.length; i++) {
    const key = args[i];
    if (key === '--help') {
      console.log('Usage: node tools/compare-sources-cli.mjs --before OLD_DOCKERFILE --after NEW_DOCKERFILE [--out NEW_REPORT.json]\nAutomatically covers all differing lines in two complete UTF-8 snapshots. Intervening unchanged lines may be included. Exit 0: graph comparison completed; 3: graph uncertainty; 1: input/host failure. Never a safe-to-skip-build certificate.');
      process.exit(0);
    }
    if (!['--before', '--after', '--out'].includes(key) || i + 1 >= args.length || seen.has(key)) throw Error('Unknown, incomplete or duplicate option ' + key);
    seen.add(key); options[key.slice(2)] = args[++i];
  }
  if (!options.before || !options.after) throw Error('Both --before and --after are required');
  const report = await compareDockerfileSources(options), text = JSON.stringify(report, null, 2) + '\n';
  if (options.out) fs.writeFileSync(options.out, text, {flag: 'wx'});
  else await new Promise((resolve, reject) => process.stdout.write(text, error => error ? reject(error) : resolve()));
  process.exitCode = report.result.impact.conservative ? 3 : 0;
} catch (error) { console.error(JSON.stringify({ok: false, error: error.message})); process.exitCode = 1; }
