import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import yaml from '@rollup/plugin-yaml'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VitePluginStyleInject from 'vite-plugin-style-inject';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue({customElement:true}),
    yaml(),
    ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
    VitePluginStyleInject(),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'NovelAITag',
      // the proper extensions will be added
      fileName: (format, entryName) => "novelai-tag.umd.js",
      formats: ['umd']
    },
    outDir: path.resolve(__dirname, 'javascript')
  },
  define: { 'process.env.NODE_ENV': '"production"' }
}
)
