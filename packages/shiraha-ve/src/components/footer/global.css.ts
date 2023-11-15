import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle(':where(footer)', styles.footer)

globalStyle(':where(footer):has(+ footer)', styles.footerHasFooter)

globalStyle(':where(footer+footer)', styles.footerFooter)

globalStyle(':where(:not(main) footer)', styles.notMainFooter)

globalStyle(':where(main footer)', styles.mainFooter)
