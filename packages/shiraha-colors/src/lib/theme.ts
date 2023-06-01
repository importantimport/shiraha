import { hexFromArgb } from '@material/material-color-utilities'
import { applyTheme, type Theme, themeFromImage } from 'mcu-extra'

export const scThemeFromImage = async (
  img: HTMLImageElement | null,
  options: ShirahaColors.Options = {},
) => {
  if (!(img?.toString() === '[object HTMLImageElement]'))
    return
  img.crossOrigin = 'anonymous'
  return await themeFromImage(img, options.customColors)
}

export const scApplyTheme = (
  theme: Theme,
  options: ShirahaColors.Options = {},
) => {
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

export const applyShirahaColors = async (
  img: HTMLImageElement | null,
  options: ShirahaColors.Options = {},
) => await scThemeFromImage(img, options)
  .then(theme => theme && scApplyTheme(theme))
