/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery"; // Ensure this is correctly configured

const SiteURL = import.meta.env.VITE_SERVER_BASE_URL as string;

export const tutorSlice = createApi({
  reducerPath: "tutorApi",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURL }),
  tagTypes: ["Tutor"],
  endpoints: builder => ({
    // ✅ Onboarding Mutation
    tutorOnboarding: builder.mutation<any, FormData>({
      query: formData => ({
        url: "/tutor/onboarding",
        method: "POST",
        data: formData,
        includeToken: true, // will be used by axiosBaseQuery to inject Bearer token
      }),
    }),
  }),
});

export const { useTutorOnboardingMutation } = tutorSlice;
