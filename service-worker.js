const m = [
  "/_app/immutable/chunks/0-4c1cb993.js",
  "/_app/immutable/chunks/1-79a3adb3.js",
  "/_app/immutable/chunks/2-4f2e9e58.js",
  "/_app/immutable/chunks/3-7fbc04d4.js",
  "/_app/immutable/chunks/4-98fe208b.js",
  "/_app/immutable/chunks/5-bda450d1.js",
  "/_app/immutable/chunks/6-74ac6833.js",
  "/_app/immutable/chunks/7-bba2cac4.js",
  "/_app/immutable/assets/StudentForm-5abcf908.css",
  "/_app/immutable/chunks/SelectField-9f11e83a.js",
  "/_app/immutable/chunks/StudentForm-89731577.js",
  "/_app/immutable/chunks/TextField-9e86c491.js",
  "/_app/immutable/chunks/_layout-da46b06b.js",
  "/_app/immutable/chunks/db-e565effc.js",
  "/_app/immutable/chunks/index-8c652ea8.js",
  "/_app/immutable/chunks/singletons-23e59a3d.js",
  "/_app/immutable/chunks/stores-7110a9aa.js",
  "/_app/immutable/start-5e8f68c8.js",
  "/_app/immutable/components/error.svelte-37dabc23.js",
  "/_app/immutable/assets/_layout-2091b991.css",
  "/_app/immutable/modules/pages/_layout.js-9cbb603b.js",
  "/_app/immutable/components/pages/_layout.svelte-cbd12ca6.js",
  "/_app/immutable/components/pages/_page.svelte-7af34391.js",
  "/_app/immutable/assets/_page-146204cd.css",
  "/_app/immutable/components/pages/generate/_page.svelte-7b1de2f0.js",
  "/_app/immutable/assets/_page-5d421b39.css",
  "/_app/immutable/components/pages/roomlayout/_page.svelte-c47eaf21.js",
  "/_app/immutable/components/pages/roster/_page.svelte-0d149fbf.js",
  "/_app/immutable/components/pages/roster/edit/_page.svelte-d634d2d0.js",
  "/_app/immutable/components/pages/roster/edit/_id_/_page.svelte-e7474f8c.js"
], u = [
  "/.nojekyll",
  "/192.png",
  "/256.png",
  "/512.png",
  "/favicon.png",
  "/manifest.json"
], l = "1675564711609", c = `cache-${l}`, n = [
  ...m,
  // the app itself
  ...u
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function a() {
    await (await caches.open(c)).addAll(n);
  }
  e.waitUntil(a());
});
self.addEventListener("activate", (e) => {
  async function a() {
    for (const s of await caches.keys())
      s !== c && await caches.delete(s);
  }
  e.waitUntil(a());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function a() {
    const s = new URL(e.request.url), t = await caches.open(c);
    if (n.includes(s.pathname))
      return t.match(e.request);
    try {
      const p = await fetch(e.request);
      return p.status === 200 && t.put(e.request, p.clone()), p;
    } catch {
      return t.match(e.request);
    }
  }
  e.respondWith(a());
});
