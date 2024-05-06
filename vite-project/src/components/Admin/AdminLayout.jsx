
import React from 'react';
import AdminNavbar from './AdminNavbar';
import AdminFooter from './AdminFooter';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
   
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
