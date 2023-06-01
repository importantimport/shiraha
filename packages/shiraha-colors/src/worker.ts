import { scGetImageElement } from './lib/image'
import { scApplyTheme } from './lib/theme'
import ShirahaColorsWorker from './lib/worker?worker&inline'

const worker = new ShirahaColorsWorker()

let mutationObserverTitle: string

const mutationObserver = new MutationObserver(async ([{ target }]) => {
  if (
    !(target.nodeName.toLowerCase() === 'title'
      && mutationObserverTitle !== target.textContent)
  ) return
  mutationObserverTitle = target.textContent as string

  const element = scGetImageElement()

  if (element)
    worker.postMessage({ image: createImageBitmap(element) })
})

mutationObserver.observe(document.querySelector('title') as Node, {
  attributes: true,
  childList: true,
  subtree: true,
})

const element = scGetImageElement()

if (element)
  worker.postMessage({ image: createImageBitmap(element) })

worker.addEventListener('message', (event: MessageEvent) => scApplyTheme(event.data))
