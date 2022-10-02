import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './global.jsx'
import { Page } from './Page.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
    <GlobalStyle />
  </React.StrictMode>
)

