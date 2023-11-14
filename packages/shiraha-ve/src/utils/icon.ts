import type { ComplexStyleRule } from '@vanilla-extract/css'

/** {@link https://github.com/marella/material-symbols/blob/main/material-symbols/index.css} */
export const icon = (content: string) => ({
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  content,
  // direction: 'ltr',
  display: 'inline-block',
  // fontFamily: [
  //   'Material Symbols Outlined',
  //   'Material Symbols Rounded',
  //   'Material Symbols Sharp',
  //   // UNTESTED
  //   'Material Icons',
  //   'Material Icons Outliend',
  //   'Material Icons Sharp',
  //   'Material Icons Two Tone',
  // ].join(', '),
  fontFamily: '"Material Symbols Outlined", "Material Symbols Rounded", "Material Symbols Sharp"',
  fontFeatureSettings: 'liga',
  fontSize: 24,
  // fontStyle: 'normal',
  // fontWeight: 'normal',
  // letterSpacing: 'normal',
  lineHeight: 1,
  textRendering: 'optimizeLegibility',
  // textTransform: 'none',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
}) as const satisfies ComplexStyleRule

export const iconFill = {
  fontVariationSettings: '\'FILL\' 1',
} as const satisfies ComplexStyleRule