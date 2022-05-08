import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';
import Header from './Components/Header';

import './reset.css'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Routes />
  </React.StrictMode>
);

