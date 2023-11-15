import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { state } from '../../utils/color'
import { vars } from '../../vars.css'
import * as styles from './styles'

/** TODO: input[type="file"] */
const button = ':where(button:not([role]), [role="button"], input[type="button"], input[type="submit"], input[type="reset"])'
const commonButton = ':where(button:not([role]), [role="button"], input[type="button"])'
const submitButton = ':where(input[type="submit"])'
const resetButton = ':where(input[type="reset"])'

const disabled = ':disabled, [aria-disabled="true"]'

// Global Button Style
globalStyle(button, styles.baseButtonGlobal)
globalStyle(`${button}:is(${disabled})`, styles.baseButtonDisabled)
globalStyle(`${button}:focus-visible`, styles.baseButtonFocusVisible)
globalStyle(`${button}:active:not(${disabled})`, styles.baseButtonActive)
globalStyle(`${button}:has([class^="material-symbols"]:first-child:not(:last-child))`, styles.baseButtonWithIconChild)

// Common Button (Elevated Style)
globalStyle(`${commonButton}:not(${disabled})`, styles.elevatedButtonGlobal)
globalStyle(`${commonButton}:active:not(${disabled})`, styles.elevatedButtonActive)
globalStyle(`${commonButton}:focus:not(${disabled})`, styles.elevatedButtonFocus)
globalStyle(`${commonButton}:hover:not(:active, ${disabled})`, styles.elevatedButtonHover)

// Submit Button (Filled Style)
globalStyle(`${submitButton}:not(${disabled})`, styles.filledButtonGlobal)
globalStyle(`${submitButton}:active:not(${disabled})`, styles.filledButtonActive)
globalStyle(`${submitButton}:focus:not(${disabled})`, styles.filledButtonFocus)
globalStyle(`${submitButton}:hover:not(:active, ${disabled})`, styles.filledButtonHover)

// Reset Button (Filled Style, Error Color)
globalStyle(`${resetButton}:not(${disabled})`, {
  backgroundColor: vars.color.error,
  color: vars.color.onError,
})

globalStyle(`${resetButton}:is(:active, :focus):not(${disabled})`, {
  backgroundColor: state(vars.color.onError, 12, vars.color.error),
})

globalStyle(`${resetButton}:hover:not(${disabled})`, {
  backgroundColor: state(vars.color.onError, 8, vars.color.error),
  boxShadow: OP.shadow1,
})

/**
 * Icon Button
 * {@link https://github.com/oscarotero/semantic-html/blob/master/html/icon-link.md#icon-only-button}
 */
globalStyle(`${button}:is([aria-label])`, styles.iconButton)
