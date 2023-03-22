import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResult = (value) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const { data } = await axios.get(`http://localhost:7777/api/search?q=${value}`);
    dispatch(setError(''));
    dispatch(setResult(data));
  } catch (e) {
    dispatch(setError(e.message));
  } finally {
    dispatch(setLoadingStatus(false));
  }
}

export const search = createSlice({
  name: 'search',
  initialState: {
    result: '',
    isLoading: false,
    error: '',
  },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})
export const { setResult, setLoadingStatus, setError } = search.actions;
export const result = ({search}) => search.result;
export const isLoading = ({search}) => search.isLoading;
export const error = ({search}) => search.error;

export default search.reducer;
