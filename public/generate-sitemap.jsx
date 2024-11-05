import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more pages as necessary
];

// Create a sitemap
const sitemapStream = new SitemapStream({ hostname: 'https://www.nexusctc.com/' });

// Generate the sitemap and write to a file
streamToPromise(sitemapStream).then((data) => {
  // Use createWriteStream to write the sitemap to a file in the public directory
  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(data.toString());
  writeStream.end();
});

// Add links to the sitemap
links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();
