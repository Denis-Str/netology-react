import {createSlice} from "@reduxjs/toolkit";
import {setError} from "./error";
import axios from "axios";

export const fetchServices = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    dispatch(setError(null));
    const {data} = await axios.get('http://localhost:7070/api/services');
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
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.loading = action.payload;
    },
  }
})
export const {setList, setLoadingStatus} = services.actions;
export const list = ({services}) => services.list;
export const loading = ({services}) => services.loading;

export default services.reducer;
