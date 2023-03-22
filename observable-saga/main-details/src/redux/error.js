import { createSlice } from "@reduxjs/toolkit";
export const error = createSlice({
  name: 'services',
  initialState: {
    error: null
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})

export const { setError } = error.actions;
export const errorMessage = ({error}) => error.error;

export default error.reducer
