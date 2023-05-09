import React from 'react';
import s from './ProductsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { addNewProductAction } from '../../store/ProductsReducer';
import { BsCartPlusFill } from 'react-icons/bs';

const ProductsList = () => {
  let products = useSelector(store => store.products);

  let dispatch = useDispatch();

  const handleAddNewProduct = () => {
    const input = prompt('Enter product information - title img(URL):');
    if (input === null) {
      return;
    }
    const productFields = input.split(' ');
    if (productFields.length !== 2) {
      alert('Please enter product title and img URL seperated by space');
      return;
    }
    const [title] = productFields;
    const lettersOnly = /^[a-zA-Zа-яА-Я\s]+$/;

    if (lettersOnly.test(title)) {
      dispatch(addNewProductAction(input));
    } else {
      alert('Product title must contain only letters');
    }
  };

  return (
    <div className={s.products__list}>
      <div className={s.product__list__texts}>
        <h2>Product</h2>
        <button onClick={handleAddNewProduct} className={s.add__new__product}>
          Add new product <BsCartPlusFill></BsCartPlusFill>
        </button>
        <h2>Quantity</h2>
      </div>
      {products.map((elem, index) => (
        <ProductItem key={index} {...elem} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ProductsList;
