// Service worker: permite instalar la app y que funcione aun sin internet
// Cambien el número de versión cada vez que suban fotos o datos.js nuevos.
const VERSION = 'recorrido-v2';
const BASICOS = ['./', './index.html', './datos.js', './manifest.json', './iconos/icono-192.png', './iconos/icono-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const esPagina = url.origin === location.origin && (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('datos.js'));
  if (esPagina) {
    // Primero internet (para ver cambios), si no hay, lo guardado
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else {
    // Fotos, librerías y mapa: lo guardado primero (más rápido)
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const c = res.clone(); caches.open(VERSION).then(x => x.put(req, c)); }
      return res;
    })));
  }
});
