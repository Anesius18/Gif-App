import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifApp } from './GifApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GifApp />
  </BrowserRouter>,
)
