import { hexFromArgb } from '@material/material-color-utilities'
import { applyTheme, themeFromImage } from 'mcu-extra'

import type { ShirahaColorsOptions } from './types'

export const applyShirahaColors = async (
  img: HTMLImageElement | null,
  options: ShirahaColorsOptions = {},
) => {
  if (!(img?.toString() === '[object HTMLImageElement]'))
    return
  img.crossOrigin = 'anonymous'
  const theme = await themeFromImage(img, options.customColors)

  applyTheme(theme, {
    brightnessSuffix: options.brightnessSuffix ?? false,
    dark: !!(
      options.dark
        ?? globalThis.matchMedia('(prefers-color-scheme: dark)').matches
    ),
    paletteTones: options.paletteTones,
    target: options.target ?? document.body,
  })

  if (options.themeColor) {
    for (const element of document
      .querySelectorAll('meta[name="theme-color"]')) element.remove()
    for (const scheme of (['light', 'dark'] as const)) {
      const themeColor = document.createElement('meta')
      themeColor.name = 'theme-color'
      themeColor.media = `(prefers-color-scheme: ${scheme})`
      themeColor.content = hexFromArgb(
        // @ts-expect-error ts(7053)
        theme.schemes[scheme][
          options.themeColor.replaceAll(/([_-][a-z])/g, s =>
            s.slice(1).toUpperCase(),
          )
        ],
      )
      document.head.append(themeColor)
    }
  }
}
