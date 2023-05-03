import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    outDir: 'public',
    lib: {
      entry: resolve('src/worklets/squiggle/worklet.ts'),
      formats: ['es'],
      name: 'worklet',
      fileName: 'worklet',
    },
  },
  css: {
    postcss: {}
  }
})
