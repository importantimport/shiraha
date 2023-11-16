import type { ComplexStyleRule } from '@vanilla-extract/css'

/** {@link https://github.com/marella/material-symbols/blob/main/material-symbols/index.css} */
export const icon = (content: string) => ({
  // direction: 'ltr',
  display: 'inline-block',
  // ].join(', '),
  fontFamily: '"Material Symbols Outlined", "Material Symbols Rounded", "Material Symbols Sharp"',
  fontSize: 24,
  // fontStyle: 'normal',
  fontWeight: 'normal',
  // fontFamily: [
  //   'Material Symbols Outlined',
  //   'Material Symbols Rounded',
  //   'Material Symbols Sharp',
  //   // UNTESTED
  //   'Material Icons',
  //   'Material Icons Outliend',
  //   'Material Icons Sharp',
  //   'Material Icons Two Tone',
  fontFeatureSettings: 'liga',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  // letterSpacing: 'normal',
  lineHeight: 1,
  wordWrap: 'normal',
  // textTransform: 'none',
  whiteSpace: 'nowrap',
  content,
  textRendering: 'optimizeLegibility',
}) as const satisfies ComplexStyleRule

export const iconFill = {
  fontVariationSettings: '\'FILL\' 1',
} as const satisfies ComplexStyleRule
