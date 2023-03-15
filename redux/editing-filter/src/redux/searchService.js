import { createSlice } from '@reduxjs/toolkit';

export const searchService = createSlice({
  name: 'searchService',
  initialState: {
    searchValue: '',
  },
  reducers: {
    changeSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    }
  }
})

export const { changeSearchValue } = searchService.actions;
export const searchValue = ({ searchService }) => searchService.searchValue;

export default searchService.reducer;
