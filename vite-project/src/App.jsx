

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/Admin/AdminLayout';
import UserLayout from './components/User/UserLayout';
import AdminProducts from './Pages/Admin/AdminProducts';
import UserProducts from './Pages/User/UserProducts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminProducts />} />
          {}
        </Route>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<UserProducts />} />
          {}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
