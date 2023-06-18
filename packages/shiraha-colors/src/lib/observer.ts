import { scGetImageElement } from './image'
import { applyShirahaColors } from './theme'

let mutationObserverTitle: string

const mutationObserver = new MutationObserver(async ([{ target }]) => {
  if (
    !(target.nodeName.toLowerCase() === 'title'
      && mutationObserverTitle !== target.textContent)
  ) return
  mutationObserverTitle = target.textContent as string
  await applyShirahaColors(
    scGetImageElement(),
    window.shiraha?.colors,
  )
})

mutationObserver.observe(document.querySelector('title') as Node, {
  attributes: true,
  childList: true,
  subtree: true,
})
