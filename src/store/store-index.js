import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories.js';
import products from './products.js';

let reducers = combineReducers({ categories, products });

let store = () => {
  return createStore(reducers, composeWithDevTools());

}

export default store();