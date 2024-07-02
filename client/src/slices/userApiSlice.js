import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUserDetails: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/user/details`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    saveEmployer: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/user/save-employer`,
        method: "POST",
        credentials: "include",
      }),
    }),
    saveJobSeeker: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/user/save-jobseeker`,
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useAddUserDetailsMutation,
  useSaveEmployerMutation,
  useSaveJobSeekerMutation,
} = userApiSlice;
