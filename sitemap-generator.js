const fs = require('fs');
const path = require('path');

// Define your website's base URL
const BASE_URL = 'https://nexusctc.com'; // Replace with your actual domain

// Define all your important routes here
const routes = [
  '/',
  '/about',
  '/contact',
  '/courses',
  // Add other routes here as needed
];

// Generate the XML structure for the sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`;
    })
    .join('')}
</urlset>`;

// Write the sitemap.xml file to the public directory
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap, 'utf8');
