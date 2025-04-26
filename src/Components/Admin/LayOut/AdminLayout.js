import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, paddingTop: '64px' }}> {/* Adjust padding to match header height */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;