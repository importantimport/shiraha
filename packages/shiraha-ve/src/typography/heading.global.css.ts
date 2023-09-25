import { globalStyle } from '@vanilla-extract/css'

globalStyle(':where(h1, h2, h3, h4, h5, h6)', {
  '@supports': {
    '(text-wrap: pretty)': {
      textWrap: 'pretty',
    },
    'not (text-wrap: pretty)': {
      textWrap: 'balance',
    },
  },
})
