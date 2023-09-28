import { style } from '@vanilla-extract/css'

import * as styles from './styles'

export const h1 = style({
  ...styles.h,
  ...styles.h1,
  selectors: {
    '&:not(:first-child)': styles.h123NotFirstChild,
  },
})

export const h2 = style({
  ...styles.h,
  ...styles.h2,
  selectors: {
    '&:not(:first-child)': styles.h123NotFirstChild,
  },
})

export const h3 = style({
  ...styles.h,
  ...styles.h3,
  selectors: {
    '&:not(:first-child)': styles.h123NotFirstChild,
  },
})

export const h4 = style({
  ...styles.h,
  ...styles.h4,
  selectors: {
    '&:not(:first-child)': styles.h456NotFirstChild,
  },
})

export const h5 = style({
  ...styles.h5,
  selectors: {
    '&:not(:first-child)': styles.h456NotFirstChild,
  },
})

export const h6 = style({
  ...styles.h6,
  selectors: {
    '&:not(:first-child)': styles.h456NotFirstChild,
  },
})
