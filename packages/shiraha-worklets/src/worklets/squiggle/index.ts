import { registerProperties } from '../../utils/paint/register-properties'
import { properties } from './properties'
import workletURL from '/public/worklet.js?url'

registerProperties(properties)
;(window.CSS as unknown as CSS).paintWorklet.addModule(workletURL)
