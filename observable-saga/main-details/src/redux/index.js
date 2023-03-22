import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from "./services";
import detailedService from "./detailedService";

export default configureStore({
  reducer: {
    services: serviceReducer,
    detailedService: detailedService
  },
})
