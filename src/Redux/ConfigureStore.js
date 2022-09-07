import { createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
import bookReducer from './Book/reducer';

const reducers = combineReducers({
  bookReducer,
});

const store = createStore(reducers);

export default store;
