self.addEventListener('install', e => {
  console.log('🧱 Service Worker zainstalowany');
  e.waitUntil(caches.open('warriors-cache').then(c => c.addAll(['./', './index.html', './manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
