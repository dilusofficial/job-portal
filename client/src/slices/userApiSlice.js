import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: `${BASE_URL}/user/info`,
        credentials: "include",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUserInfoQuery } = userApiSlice;
