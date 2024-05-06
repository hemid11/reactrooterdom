
import React from 'react';
import UserNavbar from './UserNavbar';
import UserFooter from './UserFooter';
import { Outlet } from 'react-router-dom';

const UserLayout = ({ children }) => {
  return (
    <div>
      <UserNavbar />
      <Outlet/>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
