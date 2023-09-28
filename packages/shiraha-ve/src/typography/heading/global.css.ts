/**
 * Adaptive Type Scale
 * 1.2x ~ 1.25x
 * 20rem (320px) ~ 52.5rem (840px)
 * {@link https://typescale.com}
 * {@link https://royalfig.github.io/fluid-typography-calculator/}
 */

import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import * as styles from './style'

globalStyle(':where(h1, h2, h3, h4)', {
  '@supports': {
    '(text-wrap: pretty)': {
      textWrap: 'pretty',
    },
    'not (text-wrap: pretty)': {
      textWrap: 'balance',
    },
  },
  'fontWeight': OP.fontWeight6,
  // 'margin': '3rem 0 1.38rem',
})

globalStyle(':where(h1), .h1', styles.h1)

globalStyle(':where(h2), .h2', styles.h2)

globalStyle(':where(h3), .h3', styles.h3)

globalStyle(':where(h4), .h4', styles.h4)

globalStyle(':where(h5), .h5', styles.h5)

globalStyle(':where(h6), .h6', styles.h6)
