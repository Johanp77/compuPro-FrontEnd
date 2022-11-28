import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './components/User';
import AppRoutes from './routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <User /> */}
    <AppRoutes />
  </React.StrictMode>
);
