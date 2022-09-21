const build = [
  "/_app/start-1b8bd331.js",
  "/_app/pages/__layout.svelte-572f8a72.js",
  "/_app/assets/pages/__layout.svelte-50949e92.css",
  "/_app/error.svelte-868fb090.js",
  "/_app/pages/generate.svelte-399b16a9.js",
  "/_app/assets/pages/generate.svelte-0087d916.css",
  "/_app/pages/index.svelte-5191b28d.js",
  "/_app/pages/roomlayout.svelte-75a0dff0.js",
  "/_app/assets/pages/roomlayout.svelte-4acb5036.css",
  "/_app/pages/roster/edit/_id_.svelte-1757989c.js",
  "/_app/pages/roster/edit/index.svelte-7c24b014.js",
  "/_app/pages/roster/index.svelte-22179bd6.js",
  "/_app/chunks/index-949cf3b2.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/db-c0070083.js",
  "/_app/chunks/StudentForm-b365ed76.js",
  "/_app/assets/StudentForm-6a615c2c.css",
  "/_app/chunks/Modal-47db0871.js"
];
const files = [
  "/.nojekyll",
  "/192.png",
  "/256.png",
  "/512.png",
  "/favicon.png",
  "/manifest.json"
];
const version = "1663780002358";
const globalThis = self;
const sw = globalThis;
const ASSETS = `cache${version}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
function install_listener(event) {
  event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
    sw.skipWaiting();
  }));
}
function activate_listener(event) {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== ASSETS)
        await caches.delete(key);
    }
    sw.clients.claim();
  }));
}
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${version}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
function fetch_listener(event) {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === sw.location.hostname && url.port !== sw.location.port;
  const isStaticAsset = url.host === sw.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
}
sw.addEventListener("install", install_listener);
sw.addEventListener("activate", activate_listener);
sw.addEventListener("fetch", fetch_listener);
