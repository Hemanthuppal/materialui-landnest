// src/bharath/Dashboard.js
import React from 'react';
import AdminLayout from '../../Admin/LayOut/AdminLayout';

const DashboardContent = () => {
  return (
    <div style={{ padding: '20px', marginTop:'100px' }}>
     
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