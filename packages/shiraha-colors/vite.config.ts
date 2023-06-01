import { resolve } from 'node:path'

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/worker.ts'),
      fileName: 'worker',
      formats: ['es'],
      name: 'worker',
    },
    outDir: 'tmp',
  },
  css: { postcss: {} },
  esbuild: { legalComments: 'external' },
  worker: { format: 'es' },
})
