importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
if (workbox) {
  console.log('[ PWA Fire Bundle ] Hello from Workbox');

  /* change strategy method to fit your pwa needs,
    update RegExp dir/route and cache name */
  workbox.routing.registerRoute(
    new RegExp('app'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: './',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 1,
        }),
      ],
    })
  );

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
} else {
  console.log('Boo! Workbox failed to load 😬');
}