import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { resolve: true },
  clean: true,
  minify: true,
  treeshake: true,
  format: ['esm', 'cjs', 'iife'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : format === 'cjs' ? '.cjs' : '.iife.js',
  }),
})
