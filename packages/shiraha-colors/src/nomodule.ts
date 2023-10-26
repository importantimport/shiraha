import { getImageElement } from './lib/image'
import './lib/observer'
import { applyShirahaColors } from './lib/theme'

/* eslint-disable unicorn/prefer-top-level-await */
(async () =>
  await applyShirahaColors(
    getImageElement(),
    window.shiraha?.colors,
  ))().catch(console.error)
/* eslint-enable unicorn/prefer-top-level-await */
