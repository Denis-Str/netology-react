import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from "./services";
import detailedReducer from "./detailedService";
import errorReducer from "./error";

export default configureStore({
  reducer: {
    services: serviceReducer,
    detailedService: detailedReducer,
    error: errorReducer
  },
})
