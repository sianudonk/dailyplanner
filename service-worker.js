const CACHE_NAME = "dailyplanner-cache-v1";
const urlsToCache = [
  "/dailyplanner/",
  "/dailyplanner/index.html",
  "/dailyplanner/manifest.json",
  "/dailyplanner/icon-192.png",
  "/dailyplanner/icon-512.png"
  // Tambahkan file CSS/JS lain jika ada
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
