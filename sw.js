// Service Worker для Memhash Telegram Web App
// Версия: 1.0.0

const CACHE_NAME = 'memhash-v1';
const STATIC_CACHE = 'memhash-static-v1';
const DYNAMIC_CACHE = 'memhash-dynamic-v1';

// Файлы для кэширования
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/gang.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
  'https://telegram.org/js/telegram-web-app.js'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.log('[SW] Cache installation failed:', error);
      })
  );

  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');

  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
            .map((key) => {
              console.log('[SW] Removing old cache:', key);
              return caches.delete(key);
            })
        );
      })
  );

  return self.clients.claim();
});

// Стратегия кэширования: Network First с fallback на Cache
self.addEventListener('fetch', (event) => {
  // Пропускаем запросы к Telegram API
  if (event.request.url.includes('telegram.org')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Клонируем ответ для кэширования
        const responseClone = response.clone();

        // Сохраняем в динамический кэш
        caches.open(DYNAMIC_CACHE)
          .then((cache) => {
            cache.put(event.request, responseClone);
          });

        return response;
      })
      .catch(() => {
        // Если сеть недоступна, пробуем взять из кэша
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }

            // Если ничего не найдено, возвращаем оффлайн страницу
            return caches.match('/index.html');
          });
      })
  );
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((keys) => {
        return Promise.all(keys.map((key) => caches.delete(key)));
      })
    );
  }
});

// Push уведомления (опционально)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Новое обновление!',
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    vibrate: [200, 100, 200],
    tag: 'memhash-notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('Memhash', options)
  );
});

// Обработка кликов по уведомлениям
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow('/')
  );
});
