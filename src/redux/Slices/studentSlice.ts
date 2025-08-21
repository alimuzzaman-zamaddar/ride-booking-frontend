/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery"; // Make sure this path is correct

const SiteURL = import.meta.env.VITE_SERVER_BASE_URL as string;

export const studentSlice = createApi({
  reducerPath: "studentApi",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURL }),
  tagTypes: ["Student"],
  endpoints: builder => ({
    // ✅ Onboarding Mutation
    studentOnboarding: builder.mutation<any, FormData>({
      query: formData => ({
        url: "/student/onboarding",
        method: "POST",
        data: formData,
        includeToken: true,
      }),
    }),
  }),
});

export const { useStudentOnboardingMutation } = studentSlice;
