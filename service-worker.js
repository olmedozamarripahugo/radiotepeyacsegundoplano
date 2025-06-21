
self.addEventListener('install', event => {
  event.waitUntil(caches.open('radio-cache').then(cache => {
    return cache.addAll(['index.html', 'logo.png', 'fondo.jpg', 'banner.jpg']);
  }));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => {
    return resp || fetch(event.request);
  }));
});
