import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './components/User';
import AppRoutes from './routes/AppRoutes'
import { StoreProvider, UserProvider } from './Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <User /> */}
    <UserProvider>
      <StoreProvider>
        <AppRoutes />
      </StoreProvider>
    </UserProvider>
  </React.StrictMode>
);
