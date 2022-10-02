import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Pages/Home/Home.jsx';
import GlobalStyle from './Styles/Global.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)
