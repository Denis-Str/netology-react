import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {setError} from "./error";

export const fetchDetailedService = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const { data } = await axios.get(`http://localhost:7070/api/services/${id}`);
    dispatch(setError(null));
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
  },
  reducers: {
    setDetailedService: (state, action) => {
      state.detailedService = action.payload;
    },
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
  }
})

export const { setLoadingStatus, setDetailedService } = detailedService.actions;
export const detailed = ({detailedService}) => detailedService.detailedService;
export const loading = ({detailedService}) => detailedService.loading;

export default detailedService.reducer;
