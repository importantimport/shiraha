import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export const chip = {
  backgroundColor: vars.color.surfaceContainerLow,
  borderRadius: '8px',
  color: vars.color.onSurface,
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 500,
  marginRight: '4px',
  paddingBlock: '4px',
  paddingInline: '12px',
} as const satisfies ComplexStyleRule

export const chipHover = {
  backgroundColor: vars.color.secondaryContainer,
} as const satisfies ComplexStyleRule
