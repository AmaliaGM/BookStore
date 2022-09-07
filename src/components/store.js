import { configureStore } from '@reduxjs/toolkit';

function reducer() {
  return {};
}

export default () => ({
  ...configureStore(reducer),
});
