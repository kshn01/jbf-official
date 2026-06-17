import { getCollection } from 'astro:content';

export const prerender = true;
const siteUrl = import.meta.env.SITE ?? 'https://jaybhavanifurniture.github.io';
const baseUrl = import.meta.env.BASE_URL ?? '/';
const sitemapBase = siteUrl + (baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl);

export async function GET() {
  const posts = await getCollection('blog');
  const pages = ['/', '/contact/', '/blog/'];
  const blogPages = posts
    .filter((post) => !post.data.draft)
    .map((post) => `/blog/${post.slug}/`);
  const urls = [...pages, ...blogPages]
    .map((path) => `  <url>\n    <loc>${sitemapBase}${path}</loc>\n  </url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml;charset=UTF-8'
    }
  });
}
