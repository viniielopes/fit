import { createRoot } from 'react-dom/client'
import App from './App'

import 'styles/global.css'
import 'react-loading-skeleton/dist/skeleton.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
