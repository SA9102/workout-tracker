// src/service-worker.js
self.addEventListener('install', (event) => {
	console.log('Service worker installed');
});

self.addEventListener('fetch', (event) => {
	// you can add caching here
});
