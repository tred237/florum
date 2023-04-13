import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './context/User';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider><App /></UserProvider>
  </BrowserRouter>
);
