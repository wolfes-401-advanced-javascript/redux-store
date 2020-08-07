// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import products from './products-slice.js'
// import { categoryReducer } from './categories.js';
// import products, { fetchProducts } from './products.js';

// let reducers = combineReducers({ categories: categoryReducer, products });

let rootReducer = combineReducers({ products });

const store = configureStore({ reducer: rootReducer });

// let store = () => {
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

export default store;