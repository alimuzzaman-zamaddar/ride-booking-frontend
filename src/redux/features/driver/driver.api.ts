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

// ▶️ NEW types
export type EarningsSummaryRow = {
  label: string;          // e.g. "2025-02-01", "2025-W05", "2025-02"
  totalEarnings: number;  // sum of earnings in that bucket
  totalRides: number;     // count of rides in that bucket
};
export type DriverRide = {
  _id: string;
  riderId: string;
  driverId?: string;
  pickupLocation: string;
  destination: string;
  status:
    | "requested"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "completed"
    | "canceled";
  rideCost?: number;
  earnings?: number;
  createdAt: string;
  updatedAt: string;
};

export type EarningsSummaryResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: EarningsSummaryRow[];
};
export type DriverRideHistoryResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    items: DriverRide[];
    pagination: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  };
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

    getDriverRideHistory: builder.query<
      DriverRideHistoryResponse,
      {
        page?: number;
        pageSize?: number;
        status?: string;
        startDate?: string;
        endDate?: string;
        minFare?: number;
        maxFare?: number;
      }
    >({
      query: params => {
        const token = localStorage.getItem("authToken");
        const search = new URLSearchParams();

        if (params?.page) search.set("page", String(params.page));
        if (params?.pageSize) search.set("pageSize", String(params.pageSize));
        if (params?.status) search.set("status", params.status);
        if (params?.startDate) search.set("startDate", params.startDate);
        if (params?.endDate) search.set("endDate", params.endDate);
        if (typeof params?.minFare === "number")
          search.set("minFare", String(params.minFare));
        if (typeof params?.maxFare === "number")
          search.set("maxFare", String(params.maxFare));

        return {
          url: `/drivers/rides?${search.toString()}`,
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
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
      // @ts-ignore
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
      // @ts-ignore
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
    // ▶️ NEW: summarized earnings (daily/weekly/monthly)
    getEarningsSummary: builder.query<
      EarningsSummaryResponse,
      "daily" | "weekly" | "monthly" | void
    >({
      query: (range = "daily") => ({
        url: `/drivers/earnings/summary?range=${range}`,
        method: "GET",
        headers: authHeader(),
      }),
    }),
  }),
});

export const {
  useGoOnlineMutation,
  useGoOfflineMutation,
  useAcceptRideMutation,
  useGetOpenRequestsQuery,
  useRejectRideMutation,
  useGetActiveRideQuery,
  useDriverUpdateRideStatusMutation,
  useGetEarningsSummaryQuery,
  useGetDriverRideHistoryQuery,
} = driverApi;
