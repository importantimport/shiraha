import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import hugoPlugin from 'vite-hugo-plugin'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    (hugoPlugin as any)({
      appDir: fileURLToPath(import.meta.url),
      hugoOutDir: resolve(fileURLToPath(import.meta.url), 'public'),
    }),
  ],
})
