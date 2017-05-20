
// uri scheme whitelist because SW seems not to support
// other scheme formats (like chrome-extension://)
const supportedUriSchemes = [
  'http://',
  'https://'
];

const isResponseAvailableFor = request => 
  new Promise((fulfill, reject) => {
    fetch(request).then(response => {
      if (response.status !== 404) {
        fulfill(response)
      } else {
        reject()
      }
    }, reject);
  });

const storeToCache = request =>
  caches.open('pwa-cache').then(cache =>
    fetch(request).then(response =>
      cache.put(request, response)));

const getFromCache = request =>
  caches.open('pwa-cache').then(cache => cache.match(request));

self.addEventListener('fetch', event => {
  const { request } = event;
  event.respondWith(isResponseAvailableFor(request).catch(() => getFromCache(request)));

  if (supportedUriSchemes.some(uri => request.url.indexOf(uri) === 0)) {
    event.waitUntil(storeToCache(request));
  }
});
