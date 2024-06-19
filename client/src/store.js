import { configureStore } from "@reduxjs/toolkit";
import dataCollectionReducer from "./slices/dataCollectionSlice";
import { apiSlice } from "./slices/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    dataCollection: dataCollectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
