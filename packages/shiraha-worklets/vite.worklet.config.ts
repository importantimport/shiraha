import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/worklets/squiggle/worklet.ts'),
      fileName: 'worklet',
      formats: ['es'],
      name: 'worklet',
    },
    outDir: 'public',
  },
  css: {
    postcss: {},
  },
})
