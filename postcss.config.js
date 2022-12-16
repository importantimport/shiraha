// parser
import sugarss from 'sugarss'
// plugins
import postcssEasyImport from 'postcss-easy-import'
import postcssMixins from 'postcss-mixins'
import postcssJitProps from 'postcss-jit-props'
import postcssLightningCSS from 'postcss-lightningcss'
import combineSelectors from 'postcss-combine-duplicated-selectors'
import combineMediaQuery from 'postcss-combine-media-query'
// open-props
import OpenProps from 'open-props'

export default ({ env, file }) => ({
  parser: file.extname === '.sss' ? sugarss : false,
  plugins: [
    postcssEasyImport({ extensions: ['.sss', '.css'] }),
    postcssMixins(),
    postcssJitProps(OpenProps),
    combineSelectors(),
    combineMediaQuery(),
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        minify: env === 'production' ? true : false,
        drafts: {
          nesting: true,
          customMedia: true,
        },
      },
    }),
  ],
})
