import {
  applyTheme,
  hexFromArgb,
  themeFromImage,
} from '@importantimport/material-color-utilities'
import type { ShirahaColorsOptions } from './types'

export const applyShirahaColors = async (
  img: HTMLImageElement | null,
  options: ShirahaColorsOptions = {},
) => {
  if (img?.toString() === '[object HTMLImageElement]') {
    img.crossOrigin = 'anonymous'
    const theme = await themeFromImage(img, options.customColors)

    applyTheme(theme, {
      dark: !!(
        options.dark
        ?? globalThis.matchMedia('(prefers-color-scheme: dark)').matches
      ),
      target: options.target ?? document.body,
      brightnessSuffix: options.brightnessSuffix ?? true,
      paletteTones: options.paletteTones,
    })

    if (options.themeColor) {
      document
        .querySelectorAll('meta[name="theme-color"]')
        .forEach(e => e.remove())
      ;(['light', 'dark'] as const).forEach((scheme) => {
        const themeColor = document.createElement('meta')
        themeColor.name = 'theme-color'
        themeColor.media = `(prefers-color-scheme: ${scheme})`
        themeColor.content = hexFromArgb(
          // @ts-expect-error ts(7053)
          theme.schemes[scheme][
            // @ts-expect-error ts(18048)
            options.themeColor.replaceAll(/([-_][a-z])/g, s =>
              s.slice(1).toUpperCase(),
            )
          ],
        )
        document.head.appendChild(themeColor)
      })
    }
  }
}
