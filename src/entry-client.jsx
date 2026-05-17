import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/music-player.css'
import './index.css'
import App from './App.jsx'

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>
)
