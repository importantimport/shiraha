import { resolve } from 'node:path'
import { defineConfig } from 'vite'

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
    postcss: {},
  },
})
