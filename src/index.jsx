
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './reset.css'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Header />
    <Routes />
    <Footer />
  </React.StrictMode>
);

