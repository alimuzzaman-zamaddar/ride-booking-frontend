import { baseApi } from "../../baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: userData => ({
        url: "/auth/register", // The URL of the register API endpoint
        method: "POST", // HTTP method
        data: userData, // The user data passed when calling the mutation
      }),
    }),
    login: builder.mutation({
      query: userData => ({
        url: "/auth/login", // The URL of the register API endpoint
        method: "POST", // HTTP method
        data: userData, // The user data passed when calling the mutation
      }),
    }),




  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
