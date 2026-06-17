import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jaybhavanifurniture.github.io',
  base: '/jbf-official',
  markdown: {
    syntaxHighlight: 'prism'
  },
  integrations: [tailwind()]
});
