import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className='Layout'>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
