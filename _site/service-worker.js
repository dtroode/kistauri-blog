var CACHE_NAME = 'Kistauri';
var urlsToCache = [];

// Cache posts
// Limited for 3

  urlsToCache.push('/tags/thoughts/unix-best/')
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  

  urlsToCache.push('/tags/thoughts/education/')
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  

  urlsToCache.push('/tags/me/my-toolset/')
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  


// Cache pages
// Do nothing if it's either an AMP page (as these are served via Googles cache) or the blog page

  
    urlsToCache.push('/404.html')
  

  
    urlsToCache.push('/archive/')
  

  
    urlsToCache.push('/portfolio/')
  

  
    urlsToCache.push('/')
  


// Cache assets

    

    

    

    
      urlsToCache.push('/assets/css/colors.css')
    

    
      urlsToCache.push('/assets/css/fonts.css')
    

    

    

    

    

    

    

    

    

    

    
      urlsToCache.push('/assets/img/bg-dark.jpg')
    

    
      urlsToCache.push('/assets/img/bg-light.jpg')
    

    
      urlsToCache.push('/assets/img/logo/icon-128.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-16.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-256.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-32.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-64.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-block-128.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-block-16.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-block-256.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-block-32.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-block-64.png')
    

    
      urlsToCache.push('/assets/img/logo/icon-block.png')
    

    
      urlsToCache.push('/assets/img/logo/icon.png')
    

    
      urlsToCache.push('/assets/img/preview.jpg')
    

    
      urlsToCache.push('/assets/img/uploads/desk.jpg')
    

    
      urlsToCache.push('/assets/img/uploads/tim.jpg')
    

    
      urlsToCache.push('/assets/img/uploads/toolset.jpg')
    

    
      urlsToCache.push('/assets/img/uploads/ubuntu.jpg')
    

    
      urlsToCache.push('/assets/js/articleHeight.js')
    

    
      urlsToCache.push('/assets/js/lazyload.js')
    

    
      urlsToCache.push('/assets/js/main.js')
    

    
      urlsToCache.push('/manifest.json')
    

    

    


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