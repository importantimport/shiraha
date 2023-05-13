import { resolve } from 'node:path'

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/worklets/squiggle/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: 'index',
    },
  },
  css: { postcss: {} },
})
