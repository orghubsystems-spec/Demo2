self.addEventListener('install', e => {
  console.log('🧱 Service Worker zainstalowany');
  // Nie buforujemy danych dynamicznych
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
  console.log('🚀 Aktywacja Service Workera');
  // Czyścimy stare cache przy każdej aktualizacji
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  // Wszystko zawsze pobierane z sieci (bez cache)
  e.respondWith(fetch(e.request));
});
