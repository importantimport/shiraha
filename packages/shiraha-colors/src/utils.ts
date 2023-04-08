import {
  applyTheme,
  themeFromImage,
} from '@importantimport/material-color-utilities'
import type { ShirahaColorsOptions } from './types'

export const applyShirahaColors = async (
  img: HTMLImageElement,
  options: ShirahaColorsOptions = {}
) => {
  if (img.toString() === '[object HTMLImageElement]') {
    img.crossOrigin = 'anonymous'
    const theme = await themeFromImage(img, options.customColors)
    applyTheme(theme, {
      dark:
        options.dark ??
        globalThis.matchMedia('(prefers-color-scheme: dark)').matches
          ? true
          : false,
      target: options.target ?? document.body,
      brightnessSuffix: options.brightnessSuffix ?? true,
      paletteTones: options.paletteTones,
    })
  }
}
