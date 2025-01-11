import authReducer from "../lib/features/authslice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});