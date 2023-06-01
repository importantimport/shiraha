import './lib/observer'

import { applyShirahaColors } from './lib/theme'

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () =>
  await applyShirahaColors(
    document.querySelector(':not(.h-card) > img:is(.u-featured, .u-photo)')
    ?? document.querySelector(':not(.h-card) > img[itemprop="image"]')
    ?? document.querySelector(':not(.h-card) > img'),
    window.shiraha?.colors,
  ))()
