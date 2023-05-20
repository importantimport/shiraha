import 'material-symbols/outlined.css'
import 'shiraha/src/shiraha.sss'
// import 'shiraha/src/themes/yuki.sss'
import 'shiraha/src/themes/baseline-tone-based.sss'

import type { Preview } from '@storybook/web-components'

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      removeComments: true,
      root: '#root-inner',
    },
    options: {
      storySort: {
        order: ['stories', 'components', 'typography', 'templates'],
      },
    },
  },
} as Preview
