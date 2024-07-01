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
    editSingleJob: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/employer/job/${data.id}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    getMySingleJob: builder.query({
      query: (jobId) => ({
        url: `${BASE_URL}/employer/job/${jobId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    deleteMyJob: builder.mutation({
      query: (jobId) => ({
        url: `${BASE_URL}/employer/job/${jobId}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useUpdateCompanyProfileMutation,
  useGetCompanyProfileQuery,
  usePostNewJobMutation,
  useGetMyJobsQuery,
  useEditSingleJobMutation,
  useGetMySingleJobQuery,
  useDeleteMyJobMutation,
} = employerApiSlice;
