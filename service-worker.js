const CACHE_NAME = "dedalos-narrado-v1";
const ASSETS = [
  "index.html",
  "manifest.json",
  "audio/01_intro.mp3",
  "audio/02_contexto.mp3",
  "audio/03_objetivo.mp3",
  "audio/04_turno.mp3",
  "audio/05_losetas.mp3",
  "audio/06_movimiento.mp3",
  "audio/07_minotauro.mp3",
  "audio/08_especiales.mp3",
  "audio/09_final.mp3",
  "audio/10_ayuda.mp3"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});