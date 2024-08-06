importScripts("https://cdn.moengage.com/release/dc_2/serviceworker_cdn.min.latest.js");

self.addEventListener('install', function(event) {
    console.log('Service Worker installed custom2.');
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker activated custom2.');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
  });