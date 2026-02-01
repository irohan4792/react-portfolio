import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/music-player.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
