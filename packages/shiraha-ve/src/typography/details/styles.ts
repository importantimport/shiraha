import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

import { icon } from '../../utils/icon'
import { vars } from '../../vars.css'

/** `:where(details)` */
export const details = {
  backgroundColor: vars.color.surfaceContainer,
  /** TODO: change this */
  borderRadius: 5,
  color: vars.color.onSurface,
  paddingBlock: '1rem',
  position: 'relative',
} as const satisfies ComplexStyleRule

/** `:where(details) > :not(summary)` */
export const detailsNotSummary = {
  paddingInline: '1.5rem',
} as const satisfies ComplexStyleRule

/** `:where(details) > summary` */
export const detailsSummary = {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: OP.fontWeight7,
  gap: '1rem',
  listStyle: 'none',
  padding: '0 1.5rem',
  /** TODO: change this */
  transition: '0.2s all ease',
} as const satisfies ComplexStyleRule

/** `:where(details) > summary::after` */
export const detailsSummaryAfter = {
  ...icon('expand_more'),
  marginLeft: 'auto',
  /** TODO:change this */
  transition: '0.2s transform ease',
} as const satisfies ComplexStyleRule

/** `:where(details) > summary::marker` */
export const detailsSummaryMarker = {
  display: 'none',
} as const satisfies ComplexStyleRule

/** `:where(details[open]) > summary` */
export const detailsOpenSummary = {
  borderEndEndRadius: 0,
  borderEndStartRadius: 0,
  marginBlockEnd: '1rem',
  padding: '0.5rem 1.5rem',
  /** TODO: change this */
  transition: '0.2s all ease',
} as const satisfies ComplexStyleRule

/** `:where(details[open]) > summary::after` */
export const detailsOpenSummaryAfter = {
  transform: 'rotate(180deg)',
} as const satisfies ComplexStyleRule
