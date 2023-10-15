import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle(':where(a[rel="chip"])', styles.chip)

globalStyle(':where(a[rel="chip"]):hover', styles.chipHover)
