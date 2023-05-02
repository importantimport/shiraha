import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { resolve: true },
  platform: 'browser',
  clean: true,
  // minify: true,
  treeshake: true,
  format: ['esm'],
  target: 'es2022',
})
