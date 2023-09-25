/**
 * {@link https://tailwindcss.com/docs/preflight}
 * {@link https://unpkg.com/tailwindcss@3.3.3/src/css/preflight.css}
 */

import { globalStyle } from '@vanilla-extract/css'

import { base } from '../layers.css'

/** Add the correct text decoration in Chrome, Edge, and Safari. */
globalStyle('abbr:where([title])', {
  '@layer': {
    [base]: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'dotted',
    },
  },
})

/** Remove the default font size and weight for headings. */
globalStyle('h1, h2, h3, h4, h5, h6', {
  '@layer': {
    [base]: {
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
  },
})

/** Reset links to optimize for opt-in styling instead of opt-out. */
globalStyle('a', {
  '@layer': {
    [base]: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
  },
})

/** Add the correct font weight in Edge and Safari. */
globalStyle('b, strong', {
  '@layer': {
    [base]: {
      fontWeight: 'bolder',
    },
  },
})

/**
 * 1. Use the user's configured `mono` font family by default.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
globalStyle('code, kbd, samp, pre', {
  '@layer': {
    [base]: {
      /** 1 */
      // fontFamily: TODO
      /** 2 */
      fontSize: '1em',
    },
  },
})

/** Add the correct font size in all browsers. */
globalStyle('small', {
  '@layer': {
    [base]: {
      fontSize: '80%',
    },
  },
})

/** Prevent `sub` and `sup` elements from affecting the line height in all browsers. */
globalStyle('sub, sup', {
  '@layer': {
    [base]: {
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline',
    },
  },
})

globalStyle('sub', {
  '@layer': {
    [base]: {
      bottom: '-0.25em',
    },
  },
})

globalStyle('sup', {
  '@layer': {
    [base]: {
      top: '-0.5em',
    },
  },
})

/**
 * 1. Remove text indentation from table contents in Chrome and Safari.
 * {@link https://bugs.chromium.org/p/chromium/issues/detail?id=999088}
 * {@link https://bugs.webkit.org/show_bug.cgi?id=201297}
 * 2. Correct table border color inheritance in all Chrome and Safari.
 * {@link https://bugs.chromium.org/p/chromium/issues/detail?id=935729}
 * {@link https://bugs.webkit.org/show_bug.cgi?id=195016}
 * 3. Remove gaps between table borders by default.
 */
globalStyle('table', {
  '@layer': {
    [base]: {
      /** 3 */
      borderCollapse: 'collapse',
      /** 2 */
      borderColor: 'inherit',
      /** 1 */
      textIndent: 0,
    },
  },
})

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 * 3. Remove default padding in all browsers.
 */
globalStyle('button, input, optgroup, select, textarea', {
  '@layer': {
    [base]: {
      /** 1 */
      color: 'inherit',
      /** 1 */
      fontFamily: 'inherit',
      /** 1 */
      fontFeatureSettings: 'inherit',
      /** 1 */
      fontSize: '100%',
      /** 1 */
      fontVariationSettings: 'inherit',
      /** 1 */
      fontWeight: 'inherit',
      /** 1 */
      lineHeight: 'inherit',
      /** 2 */
      margin: 0,
      /** 3 */
      padding: 0,
    },
  },
})

/** Remove the inheritance of text transform in Edge and Firefox. */
globalStyle('button, select', {
  '@layer': {
    [base]: {
      textTransform: 'none',
    },
  },
})

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Remove default button styles.
 */
globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  '@layer': {
    [base]: {
      /** 1 */
      WebkitAppearance: 'button',
      /** 2 */
      backgroundColor: 'transparent',
      /** 2 */
      backgroundImage: 'none',
    },
  },
})

/** Use the modern Firefox focus style for all focusable elements. */
globalStyle(':-moz-focusring', {
  '@layer': {
    [base]: {
      outline: 'auto',
    },
  },
})

/**
 * Remove the additional `:invalid` styles in Firefox.
 * {@link https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737}
 */
globalStyle(':-moz-ui-invalid', {
  '@layer': {
    [base]: {
      boxShadow: 'none',
    },
  },
})

/** Add the correct vertical alignment in Chrome and Firefox. */
globalStyle('progress', {
  '@layer': {
    [base]: {
      verticalAlign: 'baseline',
    },
  },
})

/** Correct the cursor style of increment and decrement buttons in Safari. */
globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
  '@layer': {
    [base]: {
      height: 'auto',
    },
  },
})

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
globalStyle('[type="search"]', {
  '@layer': {
    [base]: {
      WebkitAppearance: 'textfield',
      outlineOffset: '-2px',
    },
  },
})

/** Remove the inner padding in Chrome and Safari on macOS. */
globalStyle('::-webkit-search-decoration', {
  '@layer': {
    [base]: {
      WebkitAppearance: 'none',
    },
  },
})

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
globalStyle('::-webkit-file-upload-button', {
  '@layer': {
    [base]: {
      WebkitAppearance: 'button',
      font: 'inherit',
    },
  },
})

/** Add the correct display in Chrome and Safari. */
globalStyle('summary', {
  '@layer': {
    [base]: {
      display: 'list-item',
    },
  },
})

/** Removes the default spacing and border for appropriate elements. */
globalStyle('blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
  '@layer': {
    [base]: {
      margin: 0,
    },
  },
})

globalStyle('fieldset', {
  '@layer': {
    [base]: {
      margin: 0,
      padding: 0,
    },
  },
})

globalStyle('legend', {
  '@layer': {
    [base]: {
      padding: 0,
    },
  },
})

globalStyle('ol, ul, menu', {
  '@layer': {
    [base]: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
  },
})

/** Reset default styling for dialogs. */
globalStyle('dialog', {
  '@layer': {
    [base]: {
      padding: 0,
    },
  },
})

/** Prevent resizing textareas horizontally by default. */
globalStyle('textarea', {
  '@layer': {
    [base]: {
      resize: 'vertical',
    },
  },
})

/**
 * 1. Reset the default placeholder opacity in Firefox.
 * {@link https://github.com/tailwindlabs/tailwindcss/issues/3300}
 * 2. Set the default placeholder color to the user's configured gray 400 color.
 */
globalStyle('input::placeholder, textarea::placeholder', {
  '@layer': {
    [base]: {
      /** 1 */
      opacity: 1,
      /** 2 */
      // color: TODO
    },
  },
})

/** Set the default cursor for buttons. */
globalStyle('button, [role="button"]', {
  '@layer': {
    [base]: {
      cursor: 'pointer',
    },
  },
})

/** Make sure disabled buttons don't get the pointer cursor. */
globalStyle(':disabled', {
  '@layer': {
    [base]: {
      cursor: 'default',
    },
  },
})

/**
 * 1. Make replaced elements `display: block` by default.
 * {@link https://github.com/mozdevs/cssremedy/issues/14}
 * 2. Add `vertical-align: middle` to align replaced elements more sensibly by default.
 * {@link https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210}
 * This can trigger a poorly considered lint error in some tools but is included by design.
 */
globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  '@layer': {
    [base]: {
      /** 1 */
      display: 'block',
      /** 2 */
      verticalAlign: 'middle',
    },
  },
})

/**
 * Constrain images and videos to the parent width and preserve their intrinsic aspect ratio.
 * {@link https://github.com/mozdevs/cssremedy/issues/14}
 */
globalStyle('img, video', {
  '@layer': {
    [base]: {
      height: 'auto',
      maxWidth: '100%',
    },
  },
})

/** Make elements with the HTML hidden attribute stay hidden by default */
globalStyle('[hidden]', {
  '@layer': {
    [base]: {
      display: 'none',
    },
  },
})
