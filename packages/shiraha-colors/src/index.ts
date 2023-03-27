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
      globalThis.document.querySelector('img.u-featured, img.u-photo') ??
        globalThis.document.querySelector('img[itemprop="image"]') ??
        globalThis.document.querySelector('img'),
      globalThis.shiraha?.colors
    )
  }
})

mutationObserver.observe(globalThis.document.querySelector('title'), {
  attributes: true,
  childList: true,
  subtree: true,
})

document.addEventListener(
  'DOMContentLoaded',
  async () =>
    await applyShirahaColors(
      globalThis.document.querySelector('img.u-featured, img.u-photo') ??
        globalThis.document.querySelector('img[itemprop="image"]') ??
        globalThis.document.querySelector('img'),
      globalThis.shiraha?.colors
    ),
  {
    once: true,
  }
)
