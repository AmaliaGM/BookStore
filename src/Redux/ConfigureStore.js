import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Book/reducer';
import categoryReducer from './Categories/categories';

const store = configureStore({
  reducer: {
    bookReducer,
    categoryReducer,
  },
});

export default store;
