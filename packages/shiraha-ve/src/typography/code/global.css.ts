import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../../vars.css'

globalStyle(':where(code)', {
  fontFamily: OP.fontMono,
  fontSize: '0.875em',
  fontWeight: OP.fontWeight6,
  color: vars.color.onSurfaceVariant,
  backgroundColor: vars.color.surfaceVariant,
  borderRadius: 4,
})

globalStyle(':where(pre)', {
  padding: '1.5rem',
  overflowX: 'auto',
  // TODO: adjust
  borderRadius: '0.25rem',
})

globalStyle(':where(pre, code)', {
  // background: 'transparent',
  hyphens: 'none',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal',
  // tabSize: 4,
  whiteSpace: 'pre',
})

// globalStyle('a code', {
//   fontWeight: vars.color.primary,
// })

globalStyle('pre code', {
  fontWeight: 'inherit',
})

// globalStyle(':where(kbd)', {})
