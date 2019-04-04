var cacheName = 'Kistauri';
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/main.js',
  '/styles/main.css',
  '/images/bg.jpg',
  '/fonts/Inter-UI-Bold.woff2',
  '/fonts/Inter-UI-Medium.woff2',
  '/fonts/Inter-UI-MediumItalic.woff2'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});