import type { ComplexStyleRule } from '@vanilla-extract/css'

import { md } from '../../utils/md'
import { vars } from '../../vars.css'

export const link = {
  background: `linear-gradient(0deg, ${vars.color.onPrimaryContainer}, ${vars.color.onPrimaryContainer}) no-repeat right bottom / 0 0.125em`,
  color: vars.color.primary,
  textDecoration: 'none',
  transition: `background-size ${md.duration.medium4} ${md.motion.emphasizedDecelerate}`,
} as const satisfies ComplexStyleRule

export const linkHover = {
  backgroundPositionX: 'left',
  backgroundSize: '100% 0.125em',
  color: vars.color.onPrimaryContainer,
} as const satisfies ComplexStyleRule

export const tag = {
  color: vars.color.primary,
  display: 'inline-block',
  marginInlineEnd: '8px',
} as const satisfies ComplexStyleRule

export const tagMarker = {
  content: '#',
  display: 'inline-block',
  marginInlineEnd: '2px',
} as const satisfies ComplexStyleRule
