const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://nexusctc.com'; // Your website's base URL
const routes = ['/', '/about', '/contact', '/courses']; // List all important routes here

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

const publicDir = path.join(__dirname, 'public');

try {
  // Ensure the 'public' directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap file
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap successfully created!');
} catch (error) {
  console.error('Error creating sitemap:', error);
}
