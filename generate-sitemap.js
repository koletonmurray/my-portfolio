import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site's base URL
const baseUrl = 'https://koleton.dev';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more routes as needed
];

// Create the sitemap
async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream(path.join(__dirname, 'dist/sitemap.xml'));

  try {
    // Add each route to the sitemap
    routes.forEach((route) => {
      sitemapStream.write(route);
    });

    sitemapStream.end();
    const sitemap = await streamToPromise(sitemapStream);
    writeStream.write(sitemap.toString());
    console.log('Sitemap successfully generated!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  } finally {
    writeStream.end();
  }
}

generateSitemap();