import { getImageElement } from './lib/image'
import './lib/observer'
import { applyShirahaColors } from './lib/theme'

await applyShirahaColors(
  getImageElement(),
  window.shiraha?.colors,
)
