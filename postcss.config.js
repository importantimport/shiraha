// parser
import sugarss from 'sugarss'

// plugins
import postcssImport from 'postcss-import'
import postcssImportExtGlob from 'postcss-import-ext-glob'
import postcssCustomMedia from 'postcss-custom-media'
import postcssMixins from 'postcss-mixins'
import postcssJitProps from 'postcss-jit-props'

// import combineSelectors from 'postcss-combine-duplicated-selectors'
import combineMediaQuery from 'postcss-combine-media-query'
import pruneVar from 'postcss-prune-var'
import postcssLightningCSS from 'postcss-lightningcss'

// open-props
import OpenProps from 'open-props'

const plugins = [
  postcssImportExtGlob(),
  postcssImport(),
  postcssCustomMedia(),
  postcssMixins(),
  postcssJitProps({
    ...OpenProps,
    // https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
    '--md-sys-motion-easing-emphasized-decelerate':
      'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
    '--md-sys-motion-easing-emphasized-accelerate':
      'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
    '--md-sys-motion-easing-standard': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
    '--md-sys-motion-easing-standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
    '--md-sys-motion-easing-standard-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
  }),
  // combineSelectors(),
  combineMediaQuery(),
]

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

export default ({ env, file }) => ({
  parser: sugarss,
  plugins: [
    ...plugins,
    // shiraha.css only
    ...(file.dirname.endsWith('shiraha/src') ? [pruneVar()] : []),
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        drafts: { nesting: true },
        minify: env === 'production',
      },
    }),
  ],
})
