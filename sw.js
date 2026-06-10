const CACHE_NAME = 'dose-calc-v2';
const ASSETS = [
  './',
  './index.html',
  './medications.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap'
];

// التثبيت المرن: استخدام Promise.allSettled لتجنب فشل التثبيت في حال تعطل أي رابط خارجي مؤقتاً
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ASSETS.map(url => {
          return fetch(url).then(response => {
            if (response.ok) {
              return cache.put(url, response);
            }
            throw new Error('Fetch failed for: ' + url);
          });
        })
      );
    })
  );
});

// تفعيل وتحديث الكاش
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// الاستجابة من الكاش أو الشبكة عند الحاجة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
