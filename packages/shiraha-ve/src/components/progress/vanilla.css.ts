import { keyframes, style } from '@vanilla-extract/css'

import * as styles from './styles'

export const indeterminate = keyframes(styles.progressIndeterminateKeyframes)

export const progress = style({
  ...styles.progress,
  selectors: {
    ...styles.progress.selectors,
    '&:not([value])::before': styles.progressIndeterminate(indeterminate),
  },
})
