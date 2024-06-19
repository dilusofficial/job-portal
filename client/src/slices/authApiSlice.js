import { BASE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/register`,
        method: "POST",
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/auth/logout`,
        method: "POST",
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    googleLoginUser: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/auth/google-login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLogoutUserMutation,
  useLoginUserMutation,
  useGoogleLoginUserMutation,
} = authApiSlice;
