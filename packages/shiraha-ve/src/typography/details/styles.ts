import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

import { icon } from '../../utils/icon'
import { vars } from '../../vars.css'

/** `:where(details)` */
export const details = {
  position: 'relative',
  paddingBlock: '1rem',
  color: vars.color.onSurface,
  backgroundColor: vars.color.surfaceContainer,
  /** TODO: change this */
  borderRadius: 5,
} as const satisfies ComplexStyleRule

/** `:where(details) > :not(summary)` */
export const detailsNotSummary = {
  paddingInline: '1.5rem',
} as const satisfies ComplexStyleRule

/** `:where(details) > summary` */
export const detailsSummary = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  padding: '0 1.5rem',
  fontWeight: OP.fontWeight7,
  listStyle: 'none',
  cursor: 'pointer',
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
  padding: '0.5rem 1.5rem',
  marginBlockEnd: '1rem',
  borderEndStartRadius: 0,
  borderEndEndRadius: 0,
  /** TODO: change this */
  transition: '0.2s all ease',
} as const satisfies ComplexStyleRule

/** `:where(details[open]) > summary::after` */
export const detailsOpenSummaryAfter = {
  transform: 'rotate(180deg)',
} as const satisfies ComplexStyleRule
