import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../../vars.css'

globalStyle('code', {
  backgroundColor: vars.color.surfaceVariant,
  borderRadius: 4,
  color: vars.color.onSurfaceVariant,
  fontFamily: OP.fontMono,
  fontSize: '0.875em',
})

// globalStyle('pre', {
//   overflowX: 'auto',
// })
