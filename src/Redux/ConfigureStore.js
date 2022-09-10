import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Book/reducer';
import categoryReducer from './Categories/categories';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    bookReducer,
    categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
