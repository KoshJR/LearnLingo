import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles/index.css';
import './styles/fonts.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='LearnLingo'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
