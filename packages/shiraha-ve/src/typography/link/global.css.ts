import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle('a:not([role])', styles.link)

globalStyle('a:not([role]):hover', styles.linkHover)
