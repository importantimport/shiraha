import { defineConfig, type Options } from 'tsup'

const options: Options = {
  entry: ['src/index.ts'],
  dts: { resolve: true },
  platform: 'browser',
  target: 'es2020',
  clean: true,
  minify: true,
  treeshake: true,
  outExtension: () => ({ js: '.js' }),
}

export default defineConfig([
  {
    ...options,
    format: ['esm'],
    esbuildOptions: (options) => {
      options.legalComments = 'external'
    },
  },
  {
    ...options,
    format: ['iife'],
    esbuildOptions: (options) => {
      options.legalComments = 'external'
      options.entryNames = 'nomodule'
    },
  },
])
