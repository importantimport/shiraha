import { globalStyle } from '@vanilla-extract/css'

import * as styles from './styles'

globalStyle('a:not([role])', styles.link)

globalStyle('a:not([role]):hover', styles.linkHover)

globalStyle(':where(a[rel="tag"])', styles.tag)
globalStyle(':where(a[rel="tag"])::before', styles.tagMarker)
globalStyle(':where(a[rel="tag"]):hover', styles.linkHover)
