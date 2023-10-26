import { defineConfig } from 'tsup'

const options: Parameters<typeof defineConfig>[0] = {
  clean: true,
  dts: false,
  minify: true,
  outExtension: () => ({ js: '.js' }),
  platform: 'browser',
  treeshake: true,
}

export default defineConfig([
  {
    ...options,
    entry: ['src/index.ts'],
    esbuildOptions: (options) => {
      options.legalComments = 'none'
    },
    format: ['esm'],
    target: 'es2022',
  },
  {
    ...options,
    entry: ['src/nomodule.ts'],
    esbuildOptions: (options) => {
      options.legalComments = 'none'
      options.entryNames = 'nomodule'
    },
    format: ['iife'],
    target: 'es2015',
  },
])
