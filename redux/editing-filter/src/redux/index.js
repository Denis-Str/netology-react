import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './services';
import searchServiceReducer from "./searchService";

export default configureStore({
  reducer: {
    services: servicesReducer,
    searchService: searchServiceReducer,
  },
})
