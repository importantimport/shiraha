import {
  themeFromImage,
  hexFromArgb,
} from '@importantimport/material-color-utilities'

export type ShirahaColorsOptions = {
  /**
   * CSS variable naming format.
   *
   * @example
   * ```ts
   * shiraha: onPrimary => '--shiraha-color-on-primary'
   * material: onPrimary => '--md-sys-color-on-primary'
   * ```
   */
  format?: 'shiraha' | 'material'
}

declare global {
  var shiraha:
    | {
        colors?: ShirahaColorsOptions
      }
    | undefined
}

const updateShirahaColors = async () => {
  const { head, querySelector, getElementById, createElement } =
    globalThis.document

  if (!getElementById('shiraha-colors')) {
    const style = createElement('style')
    style.id = 'shiraha-colors'
    head.append(style)
  }

  const img: HTMLImageElement =
    querySelector('img.u-featured, img.u-photo') ??
    querySelector('img[itemprop="image"]') ??
    querySelector('img')

  if (img) {
    const theme = await themeFromImage(img)
    getElementById('shiraha-colors').innerHTML = `:root{${Object.entries(
      theme.schemes
    )
      .map(([suffix, scheme]) =>
        Object.entries(scheme.toJSON())
          .map(
            ([key, value]) =>
              `--${
                globalThis.shiraha?.colors?.format === 'material'
                  ? 'md-sys'
                  : 'shiraha'
              }-color-${key
                .replace(/([A-Z]+)/g, '-$1')
                .toLowerCase()}-${suffix}: ${hexFromArgb(value)}`
          )
          .join(';')
      )
      .join('')}}`
  }
}

let mutationObserverTitle: string

const mutationObserver = new MutationObserver(async ([mutation]) => {
  if (
    mutation.target.nodeName.toLowerCase() === 'title' &&
    mutationObserverTitle !== mutation.target.textContent
  ) {
    mutationObserverTitle = mutation.target.textContent
    await updateShirahaColors()
  }
})

mutationObserver.observe(globalThis.document.querySelector('title'), {
  attributes: true,
  childList: true,
  subtree: true,
})

document.addEventListener(
  'DOMContentLoaded',
  async () => await updateShirahaColors(),
  {
    once: true,
  }
)
