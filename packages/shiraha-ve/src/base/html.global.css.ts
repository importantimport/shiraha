import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../vars.css'

globalStyle('html', {
  boxSizing: 'border-box',
  fontFamily: OP.fontSans,
  fontSize: OP.fontSize1,
  fontWeight: OP.fontWeight4,
  hyphens: 'auto',
  lineHeight: 1.5,
  textWrap: 'pretty',
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  tabSize: 4,
  accentColor: vars.color.primary,
})

globalStyle('html:focus-within', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
  scrollBehavior: 'smooth',
})
