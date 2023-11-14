import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle(':where(details)', styles.details)

globalStyle(':where(details) > :not(summary)', styles.detailsNotSummary)

globalStyle(':where(details) > summary', styles.detailsSummary)

globalStyle(':where(details) > summary::after', styles.detailsSummaryAfter)

globalStyle(':where(details) > summary::marker', styles.detailsSummaryMarker)

globalStyle(':where(details[open]) > summary', styles.detailsOpenSummary)

globalStyle(':where(details[open]) > summary::after', styles.detailsOpenSummaryAfter)
