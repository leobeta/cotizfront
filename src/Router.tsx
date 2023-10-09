import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import React from 'react';
import { RouterLayout } from './common/RouterLayout';

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout/>}>\
        <Route path='/' element={<HomePage/>} />
      </Route>

      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}