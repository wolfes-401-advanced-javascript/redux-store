  
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categories from './categories.js';
import products from './products.js';
import cart from './cart.js';
import product_details from './product-details.js';

let reducers = combineReducers({ categories, products, cart, product_details });

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();