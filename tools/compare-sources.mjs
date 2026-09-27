import {Worker} from 'node:worker_threads';

/** Compare two fixed local Dockerfile snapshots using the MoonBit graph core. */
export function compareDockerfileSources({before, after}) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('./compare-sources-worker.mjs', import.meta.url), {
      workerData: {before, after}, resourceLimits: {maxOldGenerationSizeMb: 256},
    });
    let received = false;
    const timer = setTimeout(() => { worker.terminate(); reject(Error('Source comparison exceeded 30 seconds')); }, 30000);
    worker.once('message', value => {
      received = true; clearTimeout(timer); worker.terminate();
      if (value.ok) resolve(value.report); else reject(Error(value.error));
    });
    worker.once('error', error => { clearTimeout(timer); reject(error); });
    worker.once('exit', code => { clearTimeout(timer); if (!received) reject(Error('Source comparison exited without a report: ' + code)); });
  });
}
