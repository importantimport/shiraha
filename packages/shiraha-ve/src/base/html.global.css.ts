import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

globalStyle('html', {
  fontFamily: OP.fontSans,
  lineHeight: 1.5,
  tabSize: 4,
})

globalStyle('html:focus-within', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
  'scrollBehavior': 'smooth',
})
