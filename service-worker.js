self.addEventListener('install', e => {
  console.log('🧱 Service Worker zainstalowany');
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
