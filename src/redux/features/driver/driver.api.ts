/* eslint-disable @typescript-eslint/ban-ts-comment */
// src/redux/features/ride/ride.api.ts
import { baseApi } from "../../baseApi";
import type { Ride } from "../ride/ride.api";


export type OnlineResponse = {
  message: string;
  ride: Ride;
};

const authHeader = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

type ToggleOnlineResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: { id: string; isOnline: boolean };
};

export const driverApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    goOnline: builder.mutation<ToggleOnlineResponse, void>({
      query: () => ({
        url: "/drivers/me/online",
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
      }),
    }),
    goOffline: builder.mutation<ToggleOnlineResponse, void>({
      query: () => ({
        url: "/drivers/me/offline",
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
      }),
    }),

    // NEW: incoming open requests
    getOpenRequests: builder.query<{ rides: Ride[] }, void>({
      query: () => ({
        url: "/ride/requests/open",
        method: "GET",
        headers: authHeader(),
      }),
      // @ts-ignore if tagTypes do not include "Ride"
      providesTags: result =>
        result
          ? [
              ...result.rides.map(r => ({ type: "Ride" as const, id: r._id })),
              { type: "Ride" as const, id: "OPEN_LIST" },
            ]
          : [{ type: "Ride" as const, id: "OPEN_LIST" }],
    }),

    getActiveRide: builder.query<{ ride: Ride | null }, void>({
      query: () => ({
        url: "/ride/active",
        method: "GET",
        headers: authHeader(),
      }),
      providesTags: res =>
        res?.ride
          ? [{ type: "Ride" as const, id: res.ride._id }]
          : [{ type: "Ride" as const, id: "ACTIVE" }],
    }),

    driverUpdateRideStatus: builder.mutation<
      { message: string; ride: Ride },
      {
        rideId: string;
        status: "picked_up" | "in_transit" | "completed" | "canceled";
      }
    >({
      query: ({ rideId, status }) => ({
        url: `/ride/${rideId}/status`,
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        data: { status },
      }),
      invalidatesTags: (_res, _err, { rideId }) => [
        { type: "Ride" as const, id: rideId },
        { type: "Ride" as const, id: "ACTIVE" },
      ],
    }),

    // NEW: accept
    acceptRide: builder.mutation<{ message: string; ride: Ride }, string>({
      query: rideId => ({
        url: `/ride/${rideId}/accept`,
        method: "PATCH",
        headers: authHeader(),
      }),
      // @ts-ignore
      invalidatesTags: (_res, _err, rideId) => [
        { type: "Ride" as const, id: rideId },
        { type: "Ride" as const, id: "OPEN_LIST" },
      ],
    }),

    // NEW: reject
    rejectRide: builder.mutation<{ message: string }, string>({
      query: rideId => ({
        url: `/ride/${rideId}/reject`,
        method: "PATCH",
        headers: authHeader(),
      }),
      // @ts-ignore
      invalidatesTags: () => [],
    }),
  }),
});

export const { useGoOnlineMutation,useGoOfflineMutation, useAcceptRideMutation,useGetOpenRequestsQuery,useRejectRideMutation,useGetActiveRideQuery,useDriverUpdateRideStatusMutation } = driverApi;
