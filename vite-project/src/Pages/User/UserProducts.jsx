
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <h1>User Products</h1>
      {}
    </div>
  );
};

export default UserProducts;
