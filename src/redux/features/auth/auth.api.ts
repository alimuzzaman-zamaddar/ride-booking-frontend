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

    logout: builder.mutation<{ message: string }, void>({
      query: () => {
        const token = localStorage.getItem("authToken");
        return {
          url: "/auth/logout",
          method: "POST",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation,  useLogoutMutation } = authApi;
