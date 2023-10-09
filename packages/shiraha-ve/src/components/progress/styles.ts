import type { ComplexStyleRule, keyframes } from '@vanilla-extract/css'

import { md } from '../../utils/md'
import { vars } from '../../vars.css'

export const progressGlobal = {
  appearance: 'none',
  backgroundColor: vars.color.surfaceContainerHighest,
  height: 4,
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
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
  animation: `${animationName} 2s ${md.motion.standardDecelerate} infinite`,
  backgroundColor: vars.color.primary,
  content: '',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
  willChange: 'left',
}) as const satisfies ComplexStyleRule

export const progressIndeterminateKeyframes = {
  from: { left: '-100%' },
  to: { left: '100%' },
} as const satisfies Parameters<typeof keyframes>[0]
