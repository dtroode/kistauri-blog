---
layout: null
---
var CACHE_NAME = 'Kistauri';
var urlsToCache = [];

// Cache posts
// Limited for 3
{% for post in site.posts limit:3 %}
  urlsToCache.push('{{ post.url }}')
  {% for file in site.static_files %}
    {% if file.path contains post.assets %}
      urlsToCache.push('{{ file.path }}')
    {% endif %}
  {% endfor %}
{% endfor %}

// Cache pages
// Do nothing if it's either an AMP page (as these are served via Googles cache) or the blog page
{% for page in site.html_pages %}
  {% if page.path contains 'amp-html' or page.path contains 'blog' %}
  {% else if %}
    urlsToCache.push('{{ page.url }}')
  {% endif %}
{% endfor %}

// Cache assets
{% for file in site.static_files %}
    {% if file.extname == '.js' or file.extname == '.css' or file.extname == '.jpg' or file.extname == '.png' or file.extname == '.json' %}
      urlsToCache.push('{{ file.path }}')
    {% endif %}
{% endfor %}

urlsToCache.push('./assets/css/styles.css');
urlsToCache.push('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/dracula.min.css');
urlsToCache.push('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js');

// Registration of service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
          console.log('ServiceWorker registration failed: ', err);
      });
  });
}
else{
  console.log('Service Workers not supported');
}

// Installation of service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetching of service-worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});