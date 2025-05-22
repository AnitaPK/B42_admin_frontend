import React from 'react';
import Sidebar from '../ProjectedRoute/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '1rem', flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
