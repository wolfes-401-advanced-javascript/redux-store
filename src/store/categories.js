/* eslint-disable no-case-declarations */
import axios from 'axios';

const initialState = {
  categproes: [],
  activeCategory: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'Change':
      return {...state, activeCategory: payload};

    case 'FETCH_CATEGORIES':
      return {...state, categories: payload};

    default:
      return state:
  }
};

export const changeCategory = (category) => {
  return {
    type: 'CHANGE',
    payload: category,
  };
};

export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/categories');
  dispatch({
    type: 'FETCH_CATEGORIES',
    payload: response.data,
  });
};