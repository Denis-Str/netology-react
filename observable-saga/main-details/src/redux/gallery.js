import { createSlice } from "@reduxjs/toolkit";

export const gallery = createSlice({
  name: 'gallery',
  initialState: {
    list: [],
    preview: null
  },
  reducers: {
    // addPreview: (state, action) => {
    //   state.preview = action.payload;
    // },
    // addImg: (state, action) => {
    //   state.list.push(action.payload);
    // },
    // deleteImg: (state, action) => {
    //   state.list = state.list.filter(src => src !== action.payload);
    // }
  }
})
// export const { addImg, addPreview, deleteImg } = gallery.actions;
// export const list = ({gallery}) => gallery.list;
// export const preview = ({gallery}) => gallery.preview;
//
// export default gallery.reducer;
