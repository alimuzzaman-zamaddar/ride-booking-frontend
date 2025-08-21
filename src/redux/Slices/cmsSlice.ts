/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

// Create API slice
export const cmsSlice = createApi({
  reducerPath: "cmsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://syntax-master.softvencefsd.xyz/api/",
  }),
  endpoints: builder => ({
    // Get home content
    getHomeContent: builder.query<any, void>({
      query: () => ({
        url: "home",
        method: "GET",
      }),
    }),

    // Get find tutors data
    getFindTutors: builder.query<any, void>({
      query: () => ({
        url: "find-tutors",
        method: "GET",
      }),
    }),
    // Get become-tutors data
    getBecomeTutors: builder.query<any, void>({
      query: () => ({
        url: "become-tutors",
        method: "GET",
      }),
    }),
    // Get become-tutors data
    getAllTutors: builder.query<any, void>({
      query: () => ({
        url: "tutors",
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for use in components
export const { useGetHomeContentQuery, useGetFindTutorsQuery,useGetBecomeTutorsQuery,useGetAllTutorsQuery } = cmsSlice;
