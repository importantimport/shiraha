import type { ComplexStyleRule, keyframes } from '@vanilla-extract/css'

import { md } from '../../utils/md'
import { vars } from '../../vars.css'

export const progressGlobal = {
  position: 'relative',
  width: '100%',
  height: 4,
  overflow: 'hidden',
  appearance: 'none',
  backgroundColor: vars.color.surfaceContainerHighest,
} as const satisfies ComplexStyleRule

export const progressBar = {
  backgroundColor: vars.color.surfaceContainerHighest,
} as const satisfies ComplexStyleRule

export const progressValue = {
  backgroundColor: vars.color.primary,
} as const satisfies ComplexStyleRule

export const progressSelectors = {
  selectors: {
    '&::-moz-progress-bar': progressValue,
    '&::-webkit-progress-bar': progressBar,
    '&::-webkit-progress-value': progressValue,
  },
} as const satisfies ComplexStyleRule

export const progress = {
  ...progressGlobal,
  ...progressSelectors,
} as const satisfies ComplexStyleRule

export const progressIndeterminate = (animationName: string) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  content: '',
  backgroundColor: vars.color.primary,
  animation: `${animationName} 2s ${md.motion.standardDecelerate} infinite`,
  willChange: 'left',
}) as const satisfies ComplexStyleRule

export const progressIndeterminateKeyframes = {
  from: { left: '-100%' },
  to: { left: '100%' },
} as const satisfies Parameters<typeof keyframes>[0]
