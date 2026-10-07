import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://murilo.szero.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_astro/site[extname]'
        }
      }
    }
  },
  build: {
    format: 'directory'
  }
});
