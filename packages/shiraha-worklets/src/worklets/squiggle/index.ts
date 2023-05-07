import workletURL from '/public/worklet.js?url'
import './properties'

(window.CSS as unknown as CSS).paintWorklet.addModule(workletURL)
