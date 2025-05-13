const CACHE_NAME = "bstories-cache-v1";
const urlsToCache = [
  "/index.html",
  "/assets/CSS/pages/login.css",
  "/assets/CSS/layout/header.css",
  "/assets/CSS/layout/footer.css",
  "/assets/imagens/logo.png",
  "/assets/imagens/icon-192.png",
  "/assets/imagens/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});