import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './styles.css'
import { FullEventosApp } from './Full-Eventos-App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
    
      <FullEventosApp />
    </BrowserRouter>

  </React.StrictMode>,
)
