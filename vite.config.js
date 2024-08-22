import { defineConfig } from 'vite';
// vars
const {resolve} = require('path');
const root = resolve(__dirname, 'src/web-pages');
const outDir = resolve(__dirname, 'dist');

// modules
const alias = require('./vite_modules/alias.js');
const plugins = require('./vite_modules/plugins');



export default defineConfig({
  root,
  server:{
    port: 3030,
  },
  build:{
    outDir,
    emptyOutDir: true,
    minify:true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        error: resolve(root, 'error/index.html'),
      }
    }
  },
  resolve:{
    alias,
  },
  plugins,
  css:{
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/files/index.scss";`
      }
    }
  }

})
