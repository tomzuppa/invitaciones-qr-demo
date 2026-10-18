// Atrio: primero la red (así siempre se ve la versión más nueva) y, sin conexión, lo último guardado
const CACHE = 'atrio-v1';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'vendor/qrcode.min.js', 'vendor/jszip.min.js', 'vendor/jsQR.js', 'assets/baobyte.png', 'assets/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !r.url.startsWith('http')) return;
  e.respondWith(fetch(r).then(res => {
    if (res.ok && new URL(r.url).origin === location.origin){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
    return res;
  }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
