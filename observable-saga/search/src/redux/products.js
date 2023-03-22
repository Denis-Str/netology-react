// тестовый файл
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const { data } = await axios.get(`${process.env.REACT_APP_URL}/products?limit=5`);
//     return data;
//   }
// );

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const { data } = await axios.get(`${process.env.REACT_APP_URL}/products?limit=5`);
    dispatch(setPosts(data));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoadingStatus(false));
  }
}
export const productsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    currentPost: {},
    isLoading: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    }
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchPosts.fulfilled, (state, action) => {
  //       // state.status = 'succeeded'
  //       state.list = action.payload
  //     })
  //
  // }
})

export const { setPosts, setLoadingStatus } = productsSlice.actions;
export const products = ({products}) => products.list;

export default productsSlice.reducer;
