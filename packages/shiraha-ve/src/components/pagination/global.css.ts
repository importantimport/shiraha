/**
 * {@link https://github.com/oscarotero/semantic-html/blob/master/html/pagination.md}
 * {@link https://a11y-style-guide.com/style-guide/section-navigation.html}
 */

import type { ComplexStyleRule } from '@vanilla-extract/css'

/** `:where(nav[aria-label="pagination"], [role="navigation"])` */
export const pagination = {} as const satisfies ComplexStyleRule
