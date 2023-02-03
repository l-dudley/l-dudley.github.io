const build = [
  "/_app/start-8b3f5f30.js",
  "/_app/pages/__layout.svelte-63b5fd5e.js",
  "/_app/assets/pages/__layout.svelte-50949e92.css",
  "/_app/error.svelte-10ecf791.js",
  "/_app/pages/generate.svelte-a3ccb94d.js",
  "/_app/assets/pages/generate.svelte-cf32a474.css",
  "/_app/pages/index.svelte-f58725b7.js",
  "/_app/pages/roomlayout.svelte-239972a9.js",
  "/_app/assets/pages/roomlayout.svelte-79992762.css",
  "/_app/pages/roster/edit/_id_.svelte-66b9a9a3.js",
  "/_app/pages/roster/edit/index.svelte-b0d118cf.js",
  "/_app/pages/roster/index.svelte-2995ac4b.js",
  "/_app/chunks/index-73f85fd5.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/db-61e6d286.js",
  "/_app/chunks/SelectField-d67783ee.js",
  "/_app/chunks/TextField-21a97b92.js",
  "/_app/chunks/StudentForm-6870e323.js",
  "/_app/assets/StudentForm-212326fb.css"
];
const files = [
  "/.nojekyll",
  "/192.png",
  "/256.png",
  "/512.png",
  "/favicon.png",
  "/manifest.json"
];
const version = "1675459710059";
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
