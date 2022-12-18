// parser
import sugarss from 'sugarss'
// plugins
import postcssImport from 'postcss-import'
import postcssImportExtGlob from 'postcss-import-ext-glob'
import postcssCustomMedia from 'postcss-custom-media'
import postcssMixins from 'postcss-mixins'
import postcssJitProps from 'postcss-jit-props'
import combineSelectors from 'postcss-combine-duplicated-selectors'
import combineMediaQuery from 'postcss-combine-media-query'
import pruneVar from 'postcss-prune-var'
import postcssLightningCSS from 'postcss-lightningcss'
// open-props
import OpenProps from 'open-props'

const plugins = (options) => [
  postcssImportExtGlob(),
  postcssImport(),
  postcssCustomMedia(),
  postcssMixins(),
  postcssJitProps(OpenProps),
  combineSelectors(),
  combineMediaQuery(),
  pruneVar(),
  postcssLightningCSS({
    browsers: 'defaults and supports css-cascade-layers',
    lightningcssOptions: {
      drafts: { nesting: true },
      ...options,
    },
  }),
]

export const vite = {
  parser: sugarss,
  plugins: plugins(),
}

export default ({ env, file }) => ({
  parser: file.extname === '.sss' ? sugarss : false,
  plugins: plugins({
    minify: env === 'production' ? true : false,
  }),
})
