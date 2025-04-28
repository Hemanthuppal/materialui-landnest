// src/bharath/Dashboard.js
import React from 'react';
import AdminLayout from '../../Admin/LayOut/AdminLayout';

const DashboardContent = () => {
  return (
    <div style={{ padding: '20px', marginTop:'100px' }}>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>
      <h1>Dashboard Content</h1>

      {/* Your dashboard content here */}
    </div>
  );
};

const Dashboard = () => {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  );
};

export default Dashboard;