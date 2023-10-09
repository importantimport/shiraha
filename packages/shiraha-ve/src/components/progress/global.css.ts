import { globalStyle, keyframes } from '@vanilla-extract/css'

import * as styles from './styles'

const indeterminate = keyframes(styles.progressIndeterminateKeyframes)

globalStyle(':where(progress)', styles.progressGlobal)

globalStyle(':where(progress)::-webkit-progress-bar', styles.progressBar)

globalStyle(':where(progress)::-webkit-progress-value', styles.progressValue)

globalStyle(':where(progress)::-moz-progress-bar', styles.progressValue)

globalStyle(':where(progress):not([value])::before', styles.progressIndeterminate(indeterminate))
