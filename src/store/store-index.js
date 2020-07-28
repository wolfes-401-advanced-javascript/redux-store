import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({});

let store = () => {
  return createStore(reducers, composeWithDevTools());

}

export default store();