import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle(':where(nav[aria-labelledby="breadcrumb"]) > *', styles.breadcrumb)

globalStyle(':where(nav[aria-labelledby="breadcrumb"]) > ul > li', styles.breadcrumbUlLi)

globalStyle(':where(nav[aria-labelledby="breadcrumb"]) > ul > li+li:before', styles.breadcrumbUlLiLiBefore)
