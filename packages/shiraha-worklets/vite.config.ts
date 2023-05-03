import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/worklets/squiggle/index.ts'),
      formats: ['es'],
      name: 'index',
      fileName: 'index',
    },
  },
  css: {
    postcss: {}
  }
})
