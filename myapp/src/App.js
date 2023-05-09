import React from 'react';
import './App.css';
import ProductsList from './components/ProductsList/ProductsList';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const App = () => {
  return (
    <div className='container'>
      <div className='cart__title__div'>
        <h4 className='cart__title'>Your Cart</h4>
        <HiOutlineShoppingCart className='cart__title__icon'></HiOutlineShoppingCart>
      </div>

      <ProductsList />
    </div>
  );
};

export default App;
