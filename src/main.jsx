import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React 18 envia warnings cuando estamos utlizando algo que esta mal en cuestion de performas
  // o en cuestion de algunos errores que no deberiamos de estar cometiendo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
