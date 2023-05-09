import React from 'react';
import s from './ProductItem.module.css';
import {
  decrByPayloadAction,
  incrByPayloadAction,
} from '../../store/ProductsReducer';

const ProductItem = ({ title, count, img, dispatch, id }) => {
  return (
    <div className={s.product__item}>
      <div className={s.product__item__info}>
        <div className={s.product__item__title}>
          <img src={img} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className={s.product__item__amount}>
          <button
            className={s.product__item__btn}
            onClick={() => dispatch(decrByPayloadAction(id))}
          >
            -
          </button>
          <h3 className={s.product__item__count}>{count}</h3>
          <button
            className={s.product__item__btn}
            onClick={() => dispatch(incrByPayloadAction(id))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
