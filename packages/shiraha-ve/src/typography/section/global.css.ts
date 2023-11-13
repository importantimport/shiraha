import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle(':where(section)', styles.section)

globalStyle(':where(section):children', styles.sectionChild)
