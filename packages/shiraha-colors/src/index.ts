import { applyShirahaColors } from './utils'
import type { ShirahaColorsOptions } from './types'

declare global {
  var shiraha:
    | {
        colors?: ShirahaColorsOptions
      }
    | undefined
}

let mutationObserverTitle: string

const mutationObserver = new MutationObserver(async ([{ target }]) => {
  if (
    target.nodeName.toLowerCase() === 'title' &&
    mutationObserverTitle !== target.textContent
  ) {
    mutationObserverTitle = target.textContent
    await applyShirahaColors(
      document.querySelector('img.u-featured, img.u-photo') ??
        document.querySelector('img[itemprop="image"]') ??
        document.querySelector('img'),
      globalThis.shiraha?.colors
    )
  }
})

mutationObserver.observe(document.querySelector('title'), {
  attributes: true,
  childList: true,
  subtree: true,
})

document.addEventListener(
  'DOMContentLoaded',
  async () =>
    await applyShirahaColors(
      document.querySelector('img.u-featured, img.u-photo') ??
        document.querySelector('img[itemprop="image"]') ??
        document.querySelector('img'),
      globalThis.shiraha?.colors
    ),
  {
    once: true,
  }
)
