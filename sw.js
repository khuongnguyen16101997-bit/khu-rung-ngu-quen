// Khu Rừng Ngủ Quên — service worker
// MỖI LẦN CẬP NHẬT GAME: tăng số VERSION bên dưới (và trong index.html), thêm file chương mới vào FILES.
const VERSION = '1.0.1';
const CACHE = 'krnq-' + VERSION, FONTS = 'krnq-fonts';
const FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'chapters/ch1.html', 'chapters/ch2.html',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))));
});
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('krnq-') && k !== CACHE && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Google Fonts: keep a copy so the game looks the same offline
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // game files: from the installed version first, network as fallback
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).catch(() => caches.match('index.html'))));
});
