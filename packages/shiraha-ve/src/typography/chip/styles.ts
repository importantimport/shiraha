import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export const chip = {
  display: 'inline-block',
  paddingBlock: '4px',
  paddingInline: '12px',
  marginRight: '4px',
  fontSize: '14px',
  fontWeight: 500,
  color: vars.color.onSurface,
  backgroundColor: vars.color.surfaceContainerLow,
  borderRadius: '8px',
} as const satisfies ComplexStyleRule

export const chipHover = {
  backgroundColor: vars.color.secondaryContainer,
} as const satisfies ComplexStyleRule
