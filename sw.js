// Service Worker for Free Design Thinking Hub
// Enables offline functionality and improves performance
// Network-first strategy for SEO, with cache fallback for offline support

const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `design-thinking-hub-${CACHE_VERSION}`;
const OFFLINE_CACHE = `offline-${CACHE_VERSION}`;

// Critical assets to cache on install (minimal for fast installation)
const CRITICAL_ASSETS = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/videoDatabase.js',
    '/js/pwa-init.js',
    '/404.html',
    '/offline.html',
    '/manifest.json'
];

// Runtime cache patterns (cached as they're requested)
const RUNTIME_CACHE_PATTERNS = [
    /\.html$/,
    /\.css$/,
    /\.js$/,
    /\.(png|jpg|jpeg|gif|svg|webp|ico)$/,
    /\.(woff|woff2|ttf|otf|eot)$/
];

// Never cache these
const NEVER_CACHE = [
    /\/api\//,
    /chrome-extension/,
    /google-analytics/,
    /googletagmanager/
];

// Maximum cache size
const MAX_CACHE_SIZE = 100;

// Install event - cache critical resources only
self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching critical assets');
                // Don't let install fail if one asset fails
                return Promise.allSettled(
                    CRITICAL_ASSETS.map(url =>
                        cache.add(url).catch(err => {
                            console.warn(`[SW] Failed to cache ${url}:`, err);
                        })
                    )
                );
            })
            .then(() => {
                console.log('[SW] Installation complete');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[SW] Installation failed:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => {
            console.log('Service Worker: Activated successfully');
            return self.clients.claim();
        })
    );
});

// Fetch event - NETWORK-FIRST strategy for SEO
// Always tries network first for fresh content, falls back to cache offline
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests and never-cache patterns
    if (url.origin !== location.origin || shouldNeverCache(request.url)) {
        return;
    }

    // Skip YouTube and external video requests
    if (request.url.includes('youtube.com') ||
        request.url.includes('youtu.be') ||
        request.url.includes('vimeo.com')) {
        return;
    }

    // NETWORK-FIRST strategy for HTML pages (SEO-friendly)
    if (request.mode === 'navigate' || request.destination === 'document') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    // Clone and cache the fresh response
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseToCache);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // If network fails, try cache, then offline page
                    return caches.match(request)
                        .then((cachedResponse) => {
                            return cachedResponse || caches.match('/offline.html');
                        });
                })
        );
        return;
    }

    // NETWORK-FIRST for CSS, JS, images, fonts (ensures fresh content)
    if (shouldRuntimeCache(request.url)) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    // Cache successful responses
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, responseToCache);
                            limitCacheSize(CACHE_NAME, MAX_CACHE_SIZE);
                        });
                    }
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if offline
                    return caches.match(request);
                })
        );
        return;
    }

    // Default: network only
    event.respondWith(fetch(request));
});

// Helper: Check if URL should never be cached
function shouldNeverCache(url) {
    return NEVER_CACHE.some(pattern => pattern.test(url));
}

// Helper: Check if URL should be runtime cached
function shouldRuntimeCache(url) {
    return RUNTIME_CACHE_PATTERNS.some(pattern => pattern.test(url));
}

// Helper: Limit cache size
async function limitCacheSize(cacheName, maxSize) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();

    if (keys.length > maxSize) {
        const deleteCount = keys.length - maxSize;
        for (let i = 0; i < deleteCount; i++) {
            await cache.delete(keys[i]);
        }
        console.log(`[SW] Cache trimmed to ${maxSize} items`);
    }
}

// Message event - handle messages from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Background sync (future enhancement)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-videos') {
        console.log('Service Worker: Background sync triggered');
        // Future: Implement background sync logic
    }
});

// Push notifications (future enhancement)
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};

    const title = data.title || 'Design Thinking Hub';
    const options = {
        body: data.body || 'New content available!',
        icon: '/icon-192x192.png',
        badge: '/icon-72x72.png',
        vibrate: [200, 100, 200],
        tag: 'design-thinking-notification',
        requireInteraction: false,
        data: {
            url: data.url || '/'
        }
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Notification click (future enhancement)
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow(event.notification.data.url || '/')
    );
});

console.log('Service Worker: Loaded');
