/* eslint-disable no-case-declarations */

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':

    return [...state, payload];

    case 'REMOVE':

      let newCart = state;
      for (let i = 0; i < newCart.length; i++) {
        if(newCart[i].name === payload.name) {
          newCart.splice(i, 1);
        }
        return [...newCart];
      }
      return newCart;

    case 'CLEAR':
      return initialState;

      default:
        return state;
  }
};

export const removeItem = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR',
  };
};