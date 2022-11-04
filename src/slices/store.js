import { configureStore } from '@reduxjs/toolkit';
import arrayReduser from './numbersArraySlice';

export default configureStore({
  reducer: {
    numbersArray: arrayReduser,
  },
});
