import { configureStore } from "@reduxjs/toolkit";
import dataCollectionReducer from "./slices/dataCollectionSlice";
import responsiveReducer from "./slices/responsiveSlice";
import { apiSlice } from "./slices/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    dataCollection: dataCollectionReducer,
    responsive: responsiveReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
