
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('dedalos-cache').then(cache => {
      return cache.addAll(['./']);
    })
  );
});
