import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const jobSeekerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveJobSeekerDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/jobseeker/data`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getAllJobs: builder.query({
      query: () => ({
        url: `${BASE_URL}/jobseeker/jobs`,
        credentials: "include",
      }),
      keepUnusedDataFor: 2,
    }),
    getSingleJob: builder.query({
      query: (jobId) => ({
        url: `${BASE_URL}/jobseeker/jobs/${jobId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getAllCompanies: builder.query({
      query: () => ({
        url: `${BASE_URL}/jobseeker/companies`,
        credentials: "include",
      }),
      keepUnusedDataFor: 2,
    }),
    getSingleCompany: builder.query({
      query: (companyId) => ({
        url: `${BASE_URL}/jobseeker/companies/${companyId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    getCompanyActiveJobs: builder.query({
      query: (companyId) => ({
        url: `${BASE_URL}/jobseeker/active-jobs/${companyId}`,
        credentials: "include",
      }),
      keepUnusedDataFor: 3,
    }),
    deleteMyJSAccount: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/jobseeker`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    getJobSeekerDetails: builder.query({
      query: () => ({
        url: `${BASE_URL}/jobseeker`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useSaveJobSeekerDetailsMutation,
  useGetAllJobsQuery,
  useGetAllCompaniesQuery,
  useGetSingleCompanyQuery,
  useGetCompanyActiveJobsQuery,
  useGetSingleJobQuery,
  useDeleteMyJSAccountMutation,
  useGetJobSeekerDetailsQuery,
} = jobSeekerApiSlice;
