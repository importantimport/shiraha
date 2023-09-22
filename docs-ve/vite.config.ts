import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  css: { postcss: {} },
  plugins: [
    svelte(),
    vanillaExtractPlugin(),
  ],
  server: { host: '0.0.0.0' },
})
