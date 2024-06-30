import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const employerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCompanyProfile: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/company-profile`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getCompanyProfile: builder.query({
      query: () => ({
        url: `${BASE_URL}/employer/company-profile`,
        credentials: "include",
      }),
      keepUnusedDataFor: 1,
    }),
    postNewJob: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/job`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getMyJobs: builder.query({
      query: () => ({
        url: `${BASE_URL}/employer/job`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useUpdateCompanyProfileMutation,
  useGetCompanyProfileQuery,
  usePostNewJobMutation,
  useGetMyJobsQuery,
} = employerApiSlice;
