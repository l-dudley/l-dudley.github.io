const build = [
  "/_app/start-64042efd.js",
  "/_app/pages/__layout.svelte-c6f3cb71.js",
  "/_app/assets/pages/__layout.svelte-50949e92.css",
  "/_app/error.svelte-b8c7cb32.js",
  "/_app/pages/generate.svelte-4353ab23.js",
  "/_app/assets/pages/generate.svelte-a03a2578.css",
  "/_app/pages/index.svelte-f0c71e63.js",
  "/_app/pages/roomlayout.svelte-4150cd8f.js",
  "/_app/assets/pages/roomlayout.svelte-a9206f8b.css",
  "/_app/pages/roster/edit/_id_.svelte-56fcd1f9.js",
  "/_app/pages/roster/edit/index.svelte-d66c6a00.js",
  "/_app/pages/roster/index.svelte-2535f4d1.js",
  "/_app/chunks/index-b1f754cc.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/db-c0070083.js",
  "/_app/chunks/StudentForm-45db6a95.js"
];
const files = [
  "/192.png",
  "/256.png",
  "/512.png",
  "/favicon.png",
  "/manifest.json"
];
const version = "1660923236047";
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
