// var cacheName = 'Kistauri';
// var filesToCache = [
//   '/',
//   '/index.html',
//   '/_sass/main.scss',
//   '/assets/css/styles.scss',
//   '/assets/css/colors.css',
//   '/assets/js/main.js',
//   '/assets/js/articleHeight.js',
//   '/assets/img/bg-light.jpg',
//   '/assets/img/bg-dark.jpg',
//   '/assets/img/avatar-light.png',
//   '/assets/img/avatar-dark.png',
//   'https://rsms.me/inter/inter.css'
// ];

// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       return cache.addAll(filesToCache);
//     })
//   );
// });

// self.addEventListener('activate', function(e) {
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (key !== cacheName) {
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function(e) {
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });