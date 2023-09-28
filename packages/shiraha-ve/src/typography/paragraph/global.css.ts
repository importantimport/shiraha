import { globalStyle } from '@vanilla-extract/css'

import * as styles from './style'

globalStyle('p', styles.p)

globalStyle('p:not(:first-child)', styles.pNotFirstChild)
