import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

const root = ':where(nav[aria-label="breadcrumbs"])'

globalStyle(`${root} > *`, styles.breadcrumb)

globalStyle(`${root} > ul > li`, styles.breadcrumbUlLi)

globalStyle(`${root} > ul > li+li:before`, styles.breadcrumbUlLiLiBefore)
