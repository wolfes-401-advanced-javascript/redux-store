import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categories from './categories.js';
import products from './products.js';

let reducers = combineReducers({ categories, products });

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();