const initialState = {
  products: [
    {name: 'french bread', category: 'bread', inventory: 5, price: '$$'},
    {name: 'carrots', category: 'fresh vegetables', inventory: 3, price: '$'},
  ],
  totalItems: 0
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
        return {...state, products: updatedProduct};
      }
      case 'RESET':
        return initialState;

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
