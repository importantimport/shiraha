import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../vars.css'

globalStyle('body', {
  /** {@link https://web.dev/adapting-typography-to-user-preferences-with-css} */
  '@media': {
    '(prefers-color-scheme: dark)': {
      fontVariationSettings: '"GRAD" -25',
    },
    '(prefers-contrast: less)': {
      fontWeight: OP.fontWeight2,
    },
    '(prefers-contrast: more)': {
      fontWeight: OP.fontWeight6,
    },
  },
  'backgroundColor': vars.color.surface,
  'color': vars.color.onSurface,
  /** {@link https://github.com/oscarotero/css-style-guide/tree/master/cases/notch} */
  'padding': 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
  'textRendering': 'optimizeSpeed',
})

/** {@link https://github.com/oscarotero/semantic-html/blob/master/html/page.md#main-element} */
globalStyle('body:has(main) > *:not(main)', {
  '@media': {
    print: {
      display: 'none',
    },
  },
})
