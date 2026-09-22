import {Worker} from 'node:worker_threads';
/** Independent worker bounds third-party regex and filesystem processing time.
 * Caller owns the directory snapshot; this API never executes a Docker build.
 */
export function inspectBuildContext(options){
  return new Promise((resolve,reject)=>{
    const worker=new Worker(new URL('./context-worker.mjs',import.meta.url),{workerData:options,resourceLimits:{maxOldGenerationSizeMb:256}});
    let received=false;
    const timer=setTimeout(()=>{worker.terminate();reject(Error('Context analysis exceeded 30 seconds'))},30000);
    worker.once('message',value=>{received=true;clearTimeout(timer);worker.terminate();if(value.ok)resolve(value.report);else reject(Error(value.error))});
    worker.once('error',error=>{clearTimeout(timer);reject(error)});
    worker.once('exit',code=>{clearTimeout(timer);if(!received)reject(Error('Context worker exited without a report: '+code))});
  });
}
