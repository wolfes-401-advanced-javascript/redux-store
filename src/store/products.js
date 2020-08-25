/* eslint-disable no-case-declarations */
import axios from 'axios';





// Our global state object just for votes
const initialState = [];
   


// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

  case 'FETCH_PRODUCTS':
    return payload;


  default:
    return state;
  }

  
  

};


// actions are the functions that components can run themselves

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/products');
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
};


export const getOneProduct = (product) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3000/products/${product.id}`);
  dispatch({
    type: 'GET_PRODUCT',
    payload: response.data,
  });
};

export const removeInventory = (product) => async (dispatch) => {
  product.inventory = product.inventory - 1;
  await axios( {
    url: `http://localhost:3000/products/${product.id}`,
    method: 'put',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(product),
  });
  const response = await axios.get(`http://localhost:3000/products`);
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
};

export const addInventory = (product) => async (dispatch) => {
  product.inventory = product.inventory + 1;
  await axios( {
    url: `http://localhost:3000/products/${product.id}`,
    method: 'put',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(product),
  });
  const response = await axios.get(`http://localhost:3000/products`);
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
};