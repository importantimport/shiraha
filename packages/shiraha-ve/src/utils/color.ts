/**
 * CSS Relative Colors
 * {@link https://caniuse.com/css-relative-colors}
 */
export const opacity = (color: string, opacity: number) => `rgb(from ${color} r g b / ${opacity}%)`

/**
 * CSS Color Mix
 * {@link https://caniuse.com/mdn-css_types_color_color-mix}
 */
export const state = (stateColor: string, opacity: number, backgroundColor: string) => `color-mix(in srgb, ${stateColor} ${opacity}%, ${backgroundColor} 100%)`
