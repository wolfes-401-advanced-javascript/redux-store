
const initialState = {
  categories: [
    {normalized_name: 'bread', display_name: 'fresh bread', description: 'bakery fresh breads'},
    {normalized_name: 'vegetables', display_name: 'fresh vegetables', description: 'vegetables fresh from the farm'},
  ],
  activeCategory: '',
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


