const CACHE_NAME = 'dose-calc-v1';
const ASSETS = [
  './',
  './index.html',
  './medications.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap'
];

// تثبيت ملف الخدمة وحفظ الملفات الأساسية في الذاكرة المؤقتة (Cache)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// تفعيل ملف الخدمة وتنظيف الكاش القديم عند التحديث
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

// الاستجابة للطلبات من الكاش مباشرة عند انقطاع الإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
