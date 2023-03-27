import {
  themeFromImage,
  hexFromArgb,
  redFromArgb,
  greenFromArgb,
  blueFromArgb,
} from '@importantimport/material-color-utilities'
import type { ShirahaColorsOptions } from './types'

export const colorFromArgb = (
  color: number,
  colorFormat: ShirahaColorsOptions['colorFormat']
): string => {
  switch (colorFormat) {
    case 'hex':
      return hexFromArgb(color)
    case 'rgb':
      return [
        redFromArgb(color),
        greenFromArgb(color),
        blueFromArgb(color),
      ].join(',')
  }
}

export const applyShirahaColors = async (
  img: HTMLImageElement,
  options?: ShirahaColorsOptions
) => {
  options = {
    prefix: {
      color: 'md-sys-color',
      palette: 'md-ref-palette',
    },
    colorFormat: 'hex',
    mode: 'internal',
    paletteTones: [],
    ...options,
    target:
      options.target ?? options.mode === 'internal'
        ? globalThis.document.head
        : globalThis.document.body,
  }
  const theme = await themeFromImage(img, options.customColors)
  const colors = Object.entries(theme.schemes)
    .map(([suffix, scheme]) =>
      Object.entries(scheme.toJSON()).map(([token, color]) => [
        `--${options.prefix.color}-${token
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase()}-${suffix}`,
        colorFromArgb(color, options.colorFormat),
      ])
    )
    .flat()
  const palettes = Object.entries(theme.palettes).map(([key, palette]) =>
    options.paletteTones.map((tone) => [
      `--${options.prefix.palette}-${key
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()}${tone}`,
      colorFromArgb(palette.tone(tone), options.colorFormat),
    ])
  )
  if (options.mode === 'internal') {
    if (!globalThis.document.getElementById('shiraha-colors')) {
      const style = globalThis.document.createElement('style')
      style.id = 'shiraha-colors'
      options.target.append(style)
    }
    globalThis.document.getElementById(
      'shiraha-colors'
    ).textContent = `:root{${colors
      .map(([key, value]) => `${key}:${value}`)
      .join(';')}}`
  } else if (options.mode === 'inline') {
    colors.forEach(([key, value]) =>
      options.target.style.setProperty(key, value)
    )
  }
}
