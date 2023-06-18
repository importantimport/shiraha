import './lib/observer'

import { scGetImageElement } from './lib/image'
import { applyShirahaColors } from './lib/theme'

await applyShirahaColors(
  scGetImageElement(),
  window.shiraha?.colors,
)
