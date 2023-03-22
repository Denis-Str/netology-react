import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

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

export const detailedService = createSlice({
  name: 'detailedService',
  initialState: {
    detailedService: {
      id: null
    },
    loading: false,
    error: '',
  },
  reducers: {
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

export const { setLoadingStatus, setDetailedService, setError } = detailedService.actions;
export const detailed = ({detailedService}) => detailedService.detailedService;
export const loading = ({detailedService}) => detailedService.loading;
export const error = ({detailedService}) => detailedService.error;

export default detailedService.reducer;
