import './App.css';

import { Button, Container } from '@mui/material';

import { AppRouter } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './common/NavBar';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
