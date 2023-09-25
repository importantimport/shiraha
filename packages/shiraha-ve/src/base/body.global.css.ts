import { globalStyle } from '@vanilla-extract/css'

globalStyle('body', {
  /** {@link https://github.com/oscarotero/css-style-guide/tree/master/cases/notch} */
  padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
})

/** {@link https://github.com/oscarotero/semantic-html/blob/master/html/page.md#main-element} */
globalStyle('body > *:not(main)', {
  '@media': {
    print: {
      display: 'none',
    },
  },
})
