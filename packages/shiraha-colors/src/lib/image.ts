export const scGetImageElement = (): HTMLImageElement | null => document.querySelector(':not(.h-card) > img:is(.u-featured, .u-photo)')
  ?? document.querySelector(':not(.h-card) > img[itemprop="image"]')
  ?? document.querySelector(':not(.h-card) > img')
