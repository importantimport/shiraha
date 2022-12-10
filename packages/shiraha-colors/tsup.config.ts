import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { resolve: true },
  format: ['esm', 'iife'],
  platform: 'browser',
  target: 'es2020',
  clean: true,
  minify: true,
  treeshake: true,
  esbuildOptions: (options) => {
    options.legalComments = 'external'
  },
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.js'  : '.iife.js',
  }),
})
