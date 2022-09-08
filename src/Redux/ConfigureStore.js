import { createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
import bookReducer from './Book/reducer';
import categoryReducer from './Categories/categories';

const reducers = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = createStore(reducers);

export default store;
