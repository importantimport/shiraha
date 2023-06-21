import { scGetImageElement } from './lib/image'
import './lib/observer'
import { applyShirahaColors } from './lib/theme'

await applyShirahaColors(
  scGetImageElement(),
  window.shiraha?.colors,
)
