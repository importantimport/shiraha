/**
 * {@link https://www.w3.org/TR/html5/common-idioms-without-dedicated-elements.html#bread-crumb-navigation}
 * {@link https://github.com/oscarotero/semantic-html/blob/master/html/breadcrumb.md}
 * {@link https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-breadcrumbs}
 */

import type { ComplexStyleRule } from '@vanilla-extract/css'

import { icon } from '../../utils/icon'

/** `:where(nav[aria-label="breadcrumbs"]) > *` */
export const breadcrumb = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
} as const satisfies ComplexStyleRule

/** `:where(nav[aria-label="breadcrumbs"]) > ul > li` */
export const breadcrumbUlLi = {
  display: 'inline-flex',
  gap: '0.5rem',
  alignItems: 'center',
  height: 24,
} as const satisfies ComplexStyleRule

/** `:where(nav[aria-label="breadcrumbs"]) > ul > li+li:before` */
export const breadcrumbUlLiLiBefore = {
  ...icon('chevron_right'),
} as const satisfies ComplexStyleRule
