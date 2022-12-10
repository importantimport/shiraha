import {
  themeFromImage,
  hexFromArgb,
} from '@importantimport/material-color-utilities'

/**
 * Update Shiraha Colors
 */
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
    ).map(([suffix, scheme]) =>
      Object.entries(scheme.toJSON()).map(
        ([key, value]) =>
          `--md-sys-color-${key
            .replace(/([A-Z]+)/g, '-$1')
            .toLowerCase()}-${suffix}: ${hexFromArgb(value)};`
      )
    )}}`
  }
}

let title: string

const observer = new MutationObserver((mutations) =>
  mutations.forEach((mutation) => {
    if (
      mutation.target.nodeName.toLowerCase() === 'title' &&
      title !== mutation.target.textContent
    ) {
      title = mutation.target.textContent
      updateShirahaColors()
    }
  })
)

observer.observe(globalThis.document.querySelector('title'), {
  attributes: true,
  childList: true,
  subtree: true,
})

document.addEventListener('DOMContentLoaded', () => updateShirahaColors(), {
  once: true,
})
