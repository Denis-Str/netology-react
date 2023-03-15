import { configureStore } from '@reduxjs/toolkit';
import evidenceReducer from "./evidence";

export default configureStore({
  reducer: {
    evidence: evidenceReducer
  },
})
