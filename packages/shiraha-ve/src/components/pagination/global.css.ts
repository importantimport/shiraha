import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

const root = ':where(nav[aria-label="pagination"], [role="navigation"])'

globalStyle(`${root} > ul`, styles.pagination)
