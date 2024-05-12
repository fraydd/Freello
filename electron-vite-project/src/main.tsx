import React , { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})

window.ipcRenderer.on("theme",(_event, theme) => {
  console.log(theme);
  document.documentElement.setAttribute('theme', theme);
})

