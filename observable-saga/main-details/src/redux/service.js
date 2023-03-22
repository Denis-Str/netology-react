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

export const fetchDetailedService = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const { data } = await axios.get(`http://localhost:7070/api/services/${id}`);
    dispatch(setError(''));
    dispatch(setDetailedService(data));
  } catch (e) {
    dispatch(setError(e.message));
  } finally {
    dispatch(setLoadingStatus(false));
  }
}

export const service = createSlice({
  name: 'service',
  initialState: {
    list: [],
    detailedService: {
      id: null
    },
    loading: false,
    error: '',
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setDetailedService: (state, action) => {
      state.detailedService = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})
export const { setList, setLoadingStatus, setDetailedService, setError } = service.actions;
export const list = ({service}) => service.list;
export const detailed = ({service}) => service.detailedService;
export const loading = ({service}) => service.loading;
export const error = ({service}) => service.error;

export default service.reducer;
