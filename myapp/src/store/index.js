import { combineReducers, createStore } from 'redux';
import { productsReducer } from './ProductsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer);
