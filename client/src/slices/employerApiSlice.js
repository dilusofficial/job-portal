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
  }),
});

export const { useUpdateCompanyProfileMutation, useGetCompanyProfileQuery } =
  employerApiSlice;
