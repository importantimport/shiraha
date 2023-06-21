import { scGetImageElement } from './lib/image'
import './lib/observer'
import { applyShirahaColors } from './lib/theme'

/* eslint-disable unicorn/prefer-top-level-await */
(async () =>
  await applyShirahaColors(
    scGetImageElement(),
    window.shiraha?.colors,
  ))().catch(console.error)
/* eslint-enable unicorn/prefer-top-level-await */
