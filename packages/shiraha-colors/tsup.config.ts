import { defineConfig } from 'tsup'

const options: Parameters<typeof defineConfig>[0] = {
  clean: true,
  dts: { resolve: true },
  entry: ['src/index.ts'],
  minify: true,
  outExtension: () => ({ js: '.js' }),
  platform: 'browser',
  treeshake: true,
}

export default defineConfig([
  {
    ...options,
    esbuildOptions: (options) => {
      options.legalComments = 'external'
    },
    format: ['esm'],
    target: 'es2022',
  },
  {
    ...options,
    esbuildOptions: (options) => {
      options.legalComments = 'external'
      options.entryNames = 'nomodule'
    },
    format: ['iife'],
    target: 'es2015',
  },
])
