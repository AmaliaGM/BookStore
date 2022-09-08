import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Book/reducer';
import categoryReducer from './Categories/categories';

const reducers = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore(reducers);

export default store;
