import { configureStore } from '@reduxjs/toolkit';
import { generalReducers } from './index'

export const store = configureStore({
  reducer: {
    ...generalReducers,
  },
});
