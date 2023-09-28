/**
 * Adaptive Type Scale
 * 1.2x ~ 1.25x
 * 20rem (320px) ~ 52.5rem (840px)
 * {@link https://typescale.com}
 * {@link https://royalfig.github.io/fluid-typography-calculator/}
 */

import { globalStyle } from '@vanilla-extract/css'

import * as styles from './style'

globalStyle(':where(h1, h2, h3, h4)', styles.h)

globalStyle(':where(h1, h2, h3):not(:first-child)', styles.h123NotFirstChild)

globalStyle(':where(h4, h5, h6):not(:first-child)', styles.h456NotFirstChild)

globalStyle(':where(h1), .h1', styles.h1)

globalStyle(':where(h2), .h2', styles.h2)

globalStyle(':where(h3), .h3', styles.h3)

globalStyle(':where(h4), .h4', styles.h4)

globalStyle(':where(h5), .h5', styles.h5)

globalStyle(':where(h6), .h6', styles.h6)
