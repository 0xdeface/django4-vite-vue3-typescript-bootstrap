const { resolve } = require('path');
import vue from '@vitejs/plugin-vue'

module.exports = {
  plugins: [vue(),],
  root: resolve('./static/src'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    hmr: {
     protocol: 'ws',
      host: '127.0.0.1',
      port: 3001,
      clientPort: 3001

    },
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.js', '.json'],
  },
  build: {
    outDir: resolve('./static/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./static/src/js/main.js'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
