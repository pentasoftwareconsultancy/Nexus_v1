import { createWriteStream } from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define the links for your sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more pages as necessary
];

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://www.nexusctc.com/' });

// Generate the sitemap
streamToPromise(sitemapStream)
  .then((data) => {
    // Define the output path (relative to your project root)
    const sitemapPath = path.resolve('./public/generate-sitemap.jsx', 'sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);
    
    writeStream.write(data.toString());
    writeStream.end(() => {
      console.log('Sitemap generated at:', sitemapPath);
    });
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });

// Add links to the sitemap
links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();
