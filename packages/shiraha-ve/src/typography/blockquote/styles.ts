import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export const blockquote = {
  borderLeftColor: vars.color.surfaceVariant,
  borderLeftWidth: 2,
  fontStyle: 'italic',
  marginTop: 24,
} as const satisfies ComplexStyleRule
