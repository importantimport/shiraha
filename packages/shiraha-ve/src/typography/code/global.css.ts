import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../../vars.css'

globalStyle(':where(code)', {
  backgroundColor: vars.color.surfaceVariant,
  borderRadius: 4,
  color: vars.color.onSurfaceVariant,
  fontFamily: OP.fontMono,
  fontSize: '0.875em',
  fontWeight: OP.fontWeight6,
})

globalStyle(':where(pre)', {
  // TODO: adjust
  borderRadius: '0.25rem',
  overflowX: 'auto',
  padding: '1.5rem',
})

globalStyle(':where(pre, code)', {
  // background: 'transparent',
  hyphens: 'none',
  // tabSize: 4,
  whiteSpace: 'pre',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal',
})

// globalStyle('a code', {
//   fontWeight: vars.color.primary,
// })

globalStyle('pre code', {
  fontWeight: 'inherit',
})

// globalStyle(':where(kbd)', {})
