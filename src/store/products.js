const initialState = {
  products: [
    {name: 'french bread', category: 'bread', inventory: 5, price: '$$'},
    {name: 'carrots', category: 'fresh vegetables', inventory: 3, price: '$'},
  ],
  activeCategory: '',
}

export default (state = initialState, action) => {
  const { type, payload} = action;

  switch (type) {
    case 'UPDATE':
      let updatedProduct = [];
      for (let i =0; i < state.products.length; i++) {
        if (state.products[i].category === payload) {
          updatedProduct.push(state.products[i]);
          
        }
      }
      console.log('State:', state);
      // console.log('updated products: ', updatedProduct);
      return {...state, activeCategory: updatedProduct[0].category};
      case 'RESET':
        
        return initialState;

      case 'FETCH':
        return { ...state, products: payload }

    default:
      return state;
  }
};

export const update = (active) => {
  return {
    type: 'UPDATE',
    payload: active,
  }
}

export const fetchProducts = () => async (dispatch) => {
  const productsResponse = await fetch('http://localhost:3000/products');
  const data = await productsResponse.json();
  dispatch(set(data));
}
