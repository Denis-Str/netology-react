import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const { data } = await axios.get('http://localhost:7070/api/services');
    dispatch(setError(''));
    dispatch(setList(data));
  } catch (e) {
    dispatch(setError(e.message));
  } finally {
    dispatch(setLoadingStatus(false));
  }
}

export const services = createSlice({
  name: 'services',
  initialState: {
    list: [],
    loading: false,
    error: '',
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})
export const { setList, setLoadingStatus, setError } = services.actions;
export const list = ({services}) => services.list;
export const loading = ({services}) => services.loading;
export const error = ({services}) => services.error;

export default services.reducer;
