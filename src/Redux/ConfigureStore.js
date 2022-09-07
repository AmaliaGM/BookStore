import { createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
import bookReducer from './book/reducer.js';
import categoryReducer from './categories/categories';

const reducers = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = createStore(reducers);

export default store;
