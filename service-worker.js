const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  e + "/_app/immutable/entry/app.569ff231.js",
  e + "/_app/immutable/chunks/0.9438023c.js",
  e + "/_app/immutable/chunks/1.b12285c5.js",
  e + "/_app/immutable/chunks/2.9af5a47a.js",
  e + "/_app/immutable/chunks/3.57669ab5.js",
  e + "/_app/immutable/chunks/4.c4bffc25.js",
  e + "/_app/immutable/chunks/5.a8d39d95.js",
  e + "/_app/immutable/chunks/6.fbf047fc.js",
  e + "/_app/immutable/chunks/7.e8de189e.js",
  e + "/_app/immutable/assets/StudentForm.5abcf908.css",
  e + "/_app/immutable/chunks/SelectField.cc9fa960.js",
  e + "/_app/immutable/chunks/StudentForm.bd9616ba.js",
  e + "/_app/immutable/chunks/TextField.948649ca.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/db.181fcdef.js",
  e + "/_app/immutable/chunks/index.35c0646e.js",
  e + "/_app/immutable/chunks/singletons.4ff3743b.js",
  e + "/_app/immutable/chunks/stores.270600c4.js",
  e + "/_app/immutable/entry/start.4a544387.js",
  e + "/_app/immutable/entry/error.svelte.76a6785a.js",
  e + "/_app/immutable/assets/_layout.2091b991.css",
  e + "/_app/immutable/entry/_layout.js.984db11e.js",
  e + "/_app/immutable/entry/_layout.svelte.cb1556ba.js",
  e + "/_app/immutable/entry/_page.svelte.f586f4ab.js",
  e + "/_app/immutable/assets/_page.146204cd.css",
  e + "/_app/immutable/entry/generate-page.svelte.960b12ce.js",
  e + "/_app/immutable/assets/_page.5d421b39.css",
  e + "/_app/immutable/entry/roomlayout-page.svelte.4e3f97e9.js",
  e + "/_app/immutable/entry/roster-page.svelte.75cea319.js",
  e + "/_app/immutable/entry/roster-edit-page.svelte.15e90ab4.js",
  e + "/_app/immutable/entry/roster-edit-_id_-page.svelte.9abb24d0.js"
], l = [
  e + "/.nojekyll",
  e + "/192.png",
  e + "/256.png",
  e + "/512.png",
  e + "/favicon.png",
  e + "/manifest.json"
], m = "1680581441485", n = `cache-${m}`, u = [
  ...i,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(n)).addAll(u);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const s of await caches.keys())
      s !== n && await caches.delete(s);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(a.request.url), p = await caches.open(n);
    if (u.includes(s.pathname))
      return p.match(a.request);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && p.put(a.request, c.clone()), c;
    } catch {
      return p.match(a.request);
    }
  }
  a.respondWith(t());
});
