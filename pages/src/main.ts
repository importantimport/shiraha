import { ViteSSG } from 'vite-ssg/single-page'
import App from './App'
import 'shiraha/src/shiraha.sss'

export const createApp = ViteSSG(App)
