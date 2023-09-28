import { style } from '@vanilla-extract/css'

import * as styles from './style'

export const p = style({
  ...styles.p,
  selectors: {
    '&:not(:first-child)': styles.pNotFirstChild,
  },
})
