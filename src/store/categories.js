
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

    default:
      return state;
  }
};

export const change = (active) => {
  return {
    type: 'CHANGE',
    payload: active,
  }
}


