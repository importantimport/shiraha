import type { ComplexStyleRule } from '@vanilla-extract/css'

import { md } from '../../utils/md'
import { vars } from '../../vars.css'

export const link = {
  color: vars.color.primary,
  textDecoration: 'none',
  background: `linear-gradient(0deg, ${vars.color.onPrimaryContainer}, ${vars.color.onPrimaryContainer}) no-repeat right bottom / 0 0.125em`,
  transition: `background-size ${md.duration.medium4} ${md.motion.emphasizedDecelerate}`,
} as const satisfies ComplexStyleRule

export const linkHover = {
  color: vars.color.onPrimaryContainer,
  backgroundPositionX: 'left',
  backgroundSize: '100% 0.125em',
} as const satisfies ComplexStyleRule

export const tag = {
  display: 'inline-block',
  marginInlineEnd: '8px',
  color: vars.color.primary,
} as const satisfies ComplexStyleRule

export const tagMarker = {
  display: 'inline-block',
  marginInlineEnd: '2px',
  content: '#',
} as const satisfies ComplexStyleRule
