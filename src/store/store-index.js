import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import products from './products-slice.js'

let rootReducer = combineReducers({ products });

const store = configureStore({ reducer: rootReducer });

export default store;