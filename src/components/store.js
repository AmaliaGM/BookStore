import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../reducers';

function reducer() {
  return {};
}

export default () => ({
  ...configureStore(reducer),
});
