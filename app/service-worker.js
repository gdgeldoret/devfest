
/* A project PWA Fire written. All writes reserved https://pwafire.org 2018.
        Author : Maye Edwin https://twitter.com/mayeedwin1
        */

  self.addEventListener('fetch', function(event) {
            event.respondWith(caches.open('cache').then(function(cache) {
            return cache.match(event.request).then(function(response) {
            console.log("cache request: " + event.request.url);
            var fetchPromise = fetch(event.request).then(function(networkResponse) {           
            // if we got a response from the cache, update the cache                   
            console.log("fetch completed: " + event.request.url, networkResponse);
            if (networkResponse) {
                console.debug("updated cached page: " + event.request.url, networkResponse);
                  cache.put(event.request, networkResponse.clone());}
                    return networkResponse;
                      }, function (event) {   
            // rejected promise - just ignore it, we're offline!   
                      console.log("Error in fetch()", event);
                      event.waitUntil(
                      caches.open('cache').then(function(cache) { 
            // our cache is named *cache* in the caches.open() above
                      return cache.addAll
                      ([                   
                    '/', // do not remove this
                    '/index.html', //default
                    '/index.html?homescreen=1', 
                    '/?homescreen=1', 
                    '/css/styles.css',
                    '/js/page.mini.js',
                    '/js/script.js',
                    '/images/logo/*',
                    '/images/people/*',
                    '/images/covers/*',
                    '/images/*',
                    '/images/thumb/devfestRV.jpg',   
                    ]);
                    })
                    );
                    });
            // respond from the cache, or the network
              return response || fetchPromise;
            });
            }));
            });
            
            self.addEventListener('install', function(event) {
              self.skipWaiting();
              console.log("Latest version installed!");
            });