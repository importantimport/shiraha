import { defineConfig } from 'vite'
import { resolve } from 'path'
// vite plugins
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import Markdown from 'vite-plugin-vue-markdown'
import ViteRestart from 'vite-plugin-restart'
import eslint from 'vite-plugin-eslint'
// postcss config
import { vite as postcss } from '../postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  css: { postcss },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
    vueI18n({
      include: resolve('src/locales/**')
    }),
    Markdown(),
    (ViteRestart instanceof Function ? ViteRestart : ViteRestart['default'])({
      restart: ['../packages/shiraha/src/**']
    }),
    eslint()
  ]
})
