// eslint-disable-next-line import
import workletURL from '/public/worklet.js?url'

import { registerProperties } from '../../utils/paint/register-properties'
import { properties } from './properties'

registerProperties(properties)
;(window.CSS as unknown as CSS).paintWorklet.addModule(workletURL)
