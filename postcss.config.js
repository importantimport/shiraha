import OpenProps from 'open-props'
// import combineSelectors from 'postcss-combine-duplicated-selectors'
import combineMediaQuery from 'postcss-combine-media-query'
import postcssCustomMedia from 'postcss-custom-media'
import postcssImport from 'postcss-import'
import postcssImportExtGlob from 'postcss-import-ext-glob'
import postcssJitProps from 'postcss-jit-props'
import postcssLightningCSS from 'postcss-lightningcss'
import postcssMixins from 'postcss-mixins'
import pruneVar from 'postcss-prune-var'
import sugarss from 'sugarss'

const plugins = [
  postcssImportExtGlob(),
  postcssImport(),
  postcssCustomMedia(),
  postcssMixins(),
  postcssJitProps({
    ...OpenProps,

    '--md-sys-motion-easing-emphasized-accelerate':
      'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
    // https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
    '--md-sys-motion-easing-emphasized-decelerate':
      'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
    '--md-sys-motion-easing-standard': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    '--md-sys-motion-easing-standard-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
    '--md-sys-motion-easing-standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
  }),
  // combineSelectors(),
  combineMediaQuery(),
]

/** @type {import('postcss-load-config').Config} */
export const vite = {
  plugins: [
    ...plugins,
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        drafts: { nesting: true },
      },
    }),
  ],
}

/** @type {import('postcss-load-config').Config} */
export default ({ _env, file }) => ({
  parser: sugarss,
  plugins: [
    ...plugins,
    // shiraha.css only
    ...(file.dirname.endsWith('shiraha/src') ? [pruneVar()] : []),
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        drafts: { nesting: true },
        minify: true,
        // minify: env === 'production',
      },
    }),
  ],
})
