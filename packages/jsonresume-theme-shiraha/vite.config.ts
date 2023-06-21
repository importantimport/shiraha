import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { vite as postcss } from '../../postcss.config'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      fileName: 'index',
      formats: ['es', 'umd'],
      name: 'jsonresumeThemeShiraha',
    },
    rollupOptions: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      external: [...Object.keys(pkg.dependencies), /^node:.*/],
    },
    target: 'esnext',
  },
  css: { postcss },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [dts()],
})
