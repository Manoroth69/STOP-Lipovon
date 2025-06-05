import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const hostname = 'https://stop-lipovon.vercel.app';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/despre', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  // Add more routes here as needed
];

const sitemapStream = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');
const readable = Readable.from(links);

readable.pipe(sitemapStream).pipe(writeStream);

streamToPromise(sitemapStream).then(() => {
  console.log('✅ Sitemap generated successfully!');
}).catch(console.error);