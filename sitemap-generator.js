const { createSitemap } = require('sitemap');
const fs = require('fs');

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  // Add more routes as needed
];

// Create sitemap
const sitemap = createSitemap({
  hostname: 'https://nexusctc.com', // Your website URL
  cacheTime: 600000, // 600 sec - cache purge period
  urls: routes,
});

// Write sitemap to file
fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
console.log('Sitemap generated!');
