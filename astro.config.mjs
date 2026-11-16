import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const EXCLUDED_SITEMAP_PATHS = new Set([
  '/404',
  '/404.html',
  '/p/marcus-vance-nrp',
  '/p/elena-rodriguez-pmp',
  '/p/david-kim-bio',
  '/p/sarah-jenkins',
  '/p/elena-rodriguez',
  '/p/david-kim',
  '/p/nurse-multi',
  '/p/paramedic-cct',
  '/p/pmp-single',
  '/p/student-research',
  '/p/alex-chen',
]);

export default defineConfig({
  site: 'https://getpathport.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    sitemap({
      lastmod: new Date(),
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/+$/, '') || '/';
        return !EXCLUDED_SITEMAP_PATHS.has(pathname);
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'react-router-dom': path.resolve(__dirname, './src/lib/router-shim.tsx'),
      },
    },
  },
});
