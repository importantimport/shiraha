import './observer'

import { applyShirahaColors } from './utils'

await applyShirahaColors(
  document.querySelector(':not(.h-card) > img:is(.u-featured, .u-photo)')
  ?? document.querySelector(':not(.h-card) > img[itemprop="image"]')
  ?? document.querySelector(':not(.h-card) > img'),
  window.shiraha?.colors,
)
