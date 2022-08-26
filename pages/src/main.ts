import { ViteSSG } from 'vite-ssg/single-page'
import App from './App'
import 'shiraha/dist/shiraha.rose.css'

export const createApp = ViteSSG(App)
