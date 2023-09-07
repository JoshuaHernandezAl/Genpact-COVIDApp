import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CovidApp } from './covid/CovidApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CovidApp />
  </React.StrictMode>,
)
