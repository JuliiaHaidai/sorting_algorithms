import { createSlice } from '@reduxjs/toolkit';

const numbersArraySlice = createSlice({
  name: 'numbersArray',
  initialState: {
    numbersArray: [3, 123, 38, 5, 198, 88, 36, 66, 127, 2, 46, 4, 139, 50, 48, 168],
  },
  reducers: {
    setNumbersArray(state, action) {
      state.numbersArray = action.payload;
    },
  },
});

export const {setNumbersArray} = numbersArraySlice.actions;
export default numbersArraySlice.reducer;
