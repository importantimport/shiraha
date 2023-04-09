import { defineConfig, type Options } from 'tsup'

const options: Options = {
  entry: ['src/index.ts'],
  dts: { resolve: true },
  platform: 'browser',
  clean: true,
  minify: true,
  treeshake: true,
  outExtension: () => ({ js: '.js' }),
}

export default defineConfig([
  {
    ...options,
    format: ['esm'],
    target: 'es2022',
    esbuildOptions: (options) => {
      options.legalComments = 'external'
    },
  },
  {
    ...options,
    format: ['iife'],
    target: 'es2015',
    esbuildOptions: (options) => {
      options.legalComments = 'external'
      options.entryNames = 'nomodule'
    },
  },
])
