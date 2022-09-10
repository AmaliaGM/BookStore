import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './Book/reducer';
import categoryReducer from './Categories/categories';

const store = configureStore({
  reducer: {
    bookReducer,
    categoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
