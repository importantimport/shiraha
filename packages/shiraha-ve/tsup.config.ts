import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import glob from 'fast-glob'
import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => ({
  dts: { resolve: true },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  entry: Object.fromEntries(glob
    // glob all vanilla-extract file
    .sync(['src/**/*.css.ts'])
    // 'src/vars.css.ts' => ['vars', 'src/vars.css.ts']
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .map((entry: string) => [entry.slice(4, -7), entry]),
  ),
  esbuildPlugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call
    vanillaExtractPlugin({ identifiers: watch ? 'debug' : 'short' }) as any,
  ],
  format: ['esm'],
}))
