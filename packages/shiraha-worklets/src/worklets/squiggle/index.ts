import workletURL from '/public/worklet.js?url'
import './properties'

(CSS as unknown as CSS).paintWorklet.addModule(workletURL)
