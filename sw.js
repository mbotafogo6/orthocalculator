const CACHE_NAME = 'moyers-v1';
const arquivos = [
  './',
  './index.html',
  './manifest.json',
  './orthologo.png'
];

// Instala o aplicativo no celular
self.addEventListener('install', evento => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(arquivos);
    })
  );
});

// Faz funcionar sem internet
self.addEventListener('fetch', evento => {
  evento.respondWith(
    caches.match(evento.request).then(resposta => {
      return resposta || fetch(evento.request);
    })
  );
});