
const initialState = {
  categories: [
    {name: 'bread', items: 0},
    {name: 'fresh vegetables', items: 0},
  ],
  totalItems: 0
}

export default (state = initialState, action) => {
  const { type, payload} = action;

  switch (type) {
    case 'CHANGE':
      return {...state, activeCategory: payload};
    case 'RESET':
      return initialState;  

    default:
      return state;
  }
};

export const change = (activeCategory) => {
  return {
    type: 'CHANGE',
    payload: activeCategory,
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}


