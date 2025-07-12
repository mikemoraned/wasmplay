const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('node:fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

const instantiateCore = WebAssembly.instantiate;

const _debugLog = (...args) => {
  if (!globalThis?.process?.env?.JCO_DEBUG) { return; }
  console.debug(...args);
}

function toUint32(val) {
  return val >>> 0;
}


let exports0;
let add010Add;

function add(arg0, arg1) {
  const ret = add010Add(toUint32(arg0), toUint32(arg1));
  return ret >>> 0;
}

const $init = (() => {
  let gen = (function* init () {
    const module0 = fetchCompile(new URL('./add.core.wasm', import.meta.url));
    ({ exports: exports0 } = yield instantiateCore(yield module0));
    add010Add = exports0['docs:adder/add@0.1.0#add'];
  })();
  let promise, resolve, reject;
  function runNext (value) {
    try {
      let done;
      do {
        ({ value, done } = gen.next(value));
      } while (!(value instanceof Promise) && !done);
      if (done) {
        if (resolve) resolve(value);
        else return value;
      }
      if (!promise) promise = new Promise((_resolve, _reject) => (resolve = _resolve, reject = _reject));
      value.then(runNext, reject);
    }
    catch (e) {
      if (reject) reject(e);
      else throw e;
    }
  }
  const maybeSyncReturn = runNext(null);
  return promise || maybeSyncReturn;
})();

await $init;
const add010 = {
  add: add,
  
};

export { add010 as add, add010 as 'docs:adder/add@0.1.0',  }