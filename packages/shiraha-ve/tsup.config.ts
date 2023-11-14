import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import browserslist from 'browserslist'
import glob from 'fast-glob'
import { browserslistToTargets, transform } from 'lightningcss'
import { Buffer } from 'node:buffer'
import { defineConfig } from 'tsup'

const targets = browserslistToTargets(browserslist('defaults and supports css-nesting'))

// TODO:
// `vanilla.css.ts` dts true
// `global.css.ts` dts false
export default defineConfig(({ watch }) => ({
  dts: { resolve: true },
  entry: Object.fromEntries(glob
    // glob all vanilla-extract file
    .sync(['src/**/*.css.ts'])
    // 'src/vars.css.ts' => ['vars', 'src/vars.css.ts']
    .map((entry: string) => [entry.slice(4, -7), entry]),
  ),
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: watch ? 'debug' : 'short',
      processCss: async css => transform({
        code: Buffer.from(css),
        filename: undefined,
        minify: !watch,
        targets,
      }).code.toString(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }) as any,
  ],
  format: ['esm'],
  minify: !watch,
}))
