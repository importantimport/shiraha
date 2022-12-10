import {
  themeFromImage,
  hexFromArgb,
} from '@importantimport/material-color-utilities'

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

const observer = new MutationObserver(async (mutations) => {
  if (
    mutations[0].target.nodeName.toLowerCase() === 'title' &&
    title !== mutations[0].target.textContent
  ) {
    title = mutations[0].target.textContent
    await updateShirahaColors()
  }
})

observer.observe(globalThis.document.querySelector('title'), {
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
