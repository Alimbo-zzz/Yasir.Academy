import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path'
import autoprefixer from 'autoprefixer';

import { resolve } from 'path';
const _src = resolve(__dirname, './src');
const _public = resolve(__dirname, './public');

export default defineConfig({
  // base: '/Yasir.Academy/',
  base: '/',
  plugins: [
    react(),
    legacy({ targets: ['IE >= 11'] }),
    {
      name: 'markdown-loader',
      transform: (code, id) => (id.slice(-3) === '.md') && `export default ${JSON.stringify(code)};`,
    },
  ],
  server: { port: 3030 },
  build: {
    minify: true,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`
      }
    },
    postcss: { plugins: [autoprefixer()] }
  },
  resolve: {
    alias: {
      '@': resolve(_src),
      '&': resolve(_public),
    }
  }
})