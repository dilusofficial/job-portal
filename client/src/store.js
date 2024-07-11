import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import dataCollectionReducer from "./slices/dataCollectionSlice";
import responsiveReducer from "./slices/responsiveSlice";
import allUsersReducer from "./slices/allUsersSlice";
import employerCompanyProfileReducer from "./slices/employerCompanyProfileSlice";
import employerPostJobReducer from "./slices/employerPostJobSlice";
import jpMessagesReducer from "./slices/JPMessagesSlice";
import jobSearchReducer from "./slices/JobportalSearches/jobSearchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    dataCollection: dataCollectionReducer,
    responsive: responsiveReducer,
    allUsers: allUsersReducer,
    employerCompanyProfile: employerCompanyProfileReducer,
    employerPostJob: employerPostJobReducer,
    jpMessages: jpMessagesReducer,
    jobSearch: jobSearchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
