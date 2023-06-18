import { Scheme } from 'mcu-extra'

import { scGetImageElement } from './lib/image'
import { scApplyTheme } from './lib/theme'
import ShirahaColorsWorker from './lib/worker?worker&inline'

const worker = new ShirahaColorsWorker()

const scPostMessage = async (element: HTMLImageElement) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context)
    return

  const img = new Image()
  img.addEventListener('load', async () => {
    canvas.width = img.width
    canvas.height = img.height
    context.drawImage(img, 0, 0)
    await createImageBitmap(canvas)
      .then(image => worker.postMessage({ image }))
  })
  img.crossOrigin = 'anonymous'
  img.src = element.src
}

let mutationObserverTitle: string

const mutationObserver = new MutationObserver(async ([{ target }]) => {
  if (
    !(target.nodeName.toLowerCase() === 'title'
      && mutationObserverTitle !== target.textContent)
  ) return
  mutationObserverTitle = target.textContent as string

  const element = scGetImageElement()

  if (element)
    await scPostMessage(element)
})

mutationObserver.observe(document.querySelector('title') as Node, {
  attributes: true,
  childList: true,
  subtree: true,
})

const element = scGetImageElement()

if (element)
  await scPostMessage(element)

worker.addEventListener('message', ({ data }: MessageEvent) => scApplyTheme({
  ...data,
  // TODO(mcu-extra): read props as fallback
  schemes: {
    dark: Scheme.dark(data.source),
    light: Scheme.light(data.source),
  },
}))
