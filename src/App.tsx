import './App.css';

import { AppRouter } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/notification.context';
import React from 'react';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
