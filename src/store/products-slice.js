import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    { name: 'french bread', category: 'bread', inventory: 5, price: '$$' },
    { name: 'carrots', category: 'fresh vegetables', inventory: 3, price: '$' },
  ],
  activeCategory: '',
}

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset(state) {
      return initialState;
    },
    update(state, action) {
      let updatedProduct = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category === action.payload) {
          updatedProduct.push(state.products[i]);
        }
      }
      return { ...state, activeCategory: updatedProduct[0].category }
    },
    set(state, action) {
      return { ...state, products: action.payload}
    }
  }
});

export const { reset, update, set } = products.actions;

export const fetchProducts = () => async (dispatch) => {
  const productsResponse = await fetch('http://localhost:3000/products');
  const data = await productsResponse.json();
  dispatch(set(data));
}

export default products.reducer;