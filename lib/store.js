import authReducer from "../lib/features/authslice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});