import { configureStore } from "@reduxjs/toolkit";
import dataCollectionReducer from "./slices/dataCollectionSlice";
import responsiveReducer from "./slices/responsiveSlice";
import allUsersReducer from "./slices/allUsersSlice";
import employerCompanyProfileReducer from "./slices/employerCompanyProfileSlice";
import { apiSlice } from "./slices/apiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    dataCollection: dataCollectionReducer,
    responsive: responsiveReducer,
    allUsers: allUsersReducer,
    employerCompanyProfile: employerCompanyProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
