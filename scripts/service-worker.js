importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  console.log("Workbox carregado com sucesso ✅");

  // Cache para arquivos estáticos (HTML, CSS, JS, imagens)
  workbox.routing.registerRoute(
    ({request}) =>
      request.destination === 'document' ||
      request.destination === 'script' ||
      request.destination === 'style' ||
      request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'bstories-static-cache',
    })
  );

  // Cache para fontes do Google
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 ano
        }),
      ],
    })
  );

} else {
  console.log("Workbox não foi carregado ❌");
}