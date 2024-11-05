// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Product Listing</h1>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
