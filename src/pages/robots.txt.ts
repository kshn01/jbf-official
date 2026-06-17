export const prerender = true;
const siteUrl = import.meta.env.SITE ?? 'https://jaybhavanifurniture.github.io';
const baseUrl = import.meta.env.BASE_URL ?? '/';
const sitemapUrl = `${siteUrl}${baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl}/sitemap.xml`;

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  });
}
