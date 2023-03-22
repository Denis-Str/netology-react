import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from "./service";

export default configureStore({
  reducer: {
    service: serviceReducer
  },
})
