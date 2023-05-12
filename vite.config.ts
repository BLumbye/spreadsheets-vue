import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SpreadsheetsVue',
      fileName: 'spreadsheets-vue',
    },
    rollupOptions: {
      external: ['vue', 'vuedraggable'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  css: {
    postcss: {
      plugins: [postcssNesting, autoprefixer({})],
    },
  },
});
