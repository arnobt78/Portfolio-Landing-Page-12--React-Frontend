/**
 * Application entry point. Mounts the root React component into the DOM.
 * StrictMode helps surface potential issues during development (e.g. side effects).
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
