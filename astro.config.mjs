import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://getpathport.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'react-router-dom': path.resolve(__dirname, './src/lib/router-shim.tsx'),
      },
    },
  },
});
