/* eslint-disable @typescript-eslint/ban-ts-comment */
// src/redux/features/ride/ride.api.ts
import { baseApi } from "../../baseApi";

// request body the backend expects
export type CreateRideBody = {
  pickupLocation: string;
  destination: string;
};

// response shape from your backend
export type CreateRideResponse = {
  message: string;
  ride: {
    _id: string;
    riderId: string;
    pickupLocation: string;
    destination: string;
    status: "requested" | "accepted" | "ongoing" | "completed" | "cancelled";
    rideCost: number;
    earnings: number;
    createdAt: string;
    updatedAt: string;
  };
};


// export type Ride = {
//   _id: string;
//   riderId: string;
//   pickupLocation: string;
//   destination: string;
//   status: "requested" | "accepted" | "ongoing" | "completed" | "cancelled";
//   rideCost: number;
//   earnings: number;
//   createdAt: string;
//   updatedAt: string;
// };
export type Ride = {
  _id: string;
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
  riderId: string;
  driverId?: string | null;
  createdAt: string;
  updatedAt: string;
};
const authHeader = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

export type GetRidesResponse = {
  rides: Ride[];
};

export type GetRideByIdResponse = {
  ride: Ride;
};


export type GetMyRidesResponse = {
  rides: Ride[];
};
export type CancelRideResponse = { message: string; ride: Ride };

export const rideApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createRideRequest: builder.mutation<CreateRideResponse, CreateRideBody>({
      query: body => {
        const token = localStorage.getItem("authToken"); // you saved this at login
        return {
          url: "/ride/request",
          method: "POST",
          data: body, // NOTE: using axiosBaseQuery => use `data` (not `body`)
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
    }),

    getMyRides: builder.query<GetMyRidesResponse, void>({
      query: () => {
        const token = localStorage.getItem("authToken");
        return {
          url: "/ride/me",
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
      // @ts-ignore
      providesTags: result =>
        result
          ? [
              ...result.rides.map(r => ({ type: "Ride" as const, id: r._id })),
              { type: "Ride" as const, id: "LIST" },
            ]
          : [{ type: "Ride" as const, id: "LIST" }],
    }),

    // 🚀 NEW: Get Rides with Filters + Pagination
    getRidesForRider: builder.query<
      GetRidesResponse,
      {
        page?: number;
        pageSize?: number;
        status?: string;
        startDate?: string;
        endDate?: string;
        minFare?: string;
        maxFare?: string;
      }
    >({
      query: params => {
        const token = localStorage.getItem("authToken");
        const searchParams = new URLSearchParams();
        if (params.page) searchParams.append("page", String(params.page));
        if (params.pageSize)
          searchParams.append("pageSize", String(params.pageSize));
        if (params.status) searchParams.append("status", params.status);
        if (params.startDate)
          searchParams.append("startDate", params.startDate);
        if (params.endDate) searchParams.append("endDate", params.endDate);
        if (params.minFare) searchParams.append("minFare", params.minFare);
        if (params.maxFare) searchParams.append("maxFare", params.maxFare);

        return {
          url: `/ride/me?${searchParams.toString()}`,
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
    }),

    getRideById: builder.query<GetRideByIdResponse, string>({
      query: rideId => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/ride/${rideId}`,
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
    }),

    cancelRide: builder.mutation<{ message: string; ride: Ride }, string>({
      query: id => ({
        url: `/ride/${id}/cancel`,
        method: "PATCH",
        headers: authHeader(),
      }),
      // @ts-ignore
      invalidatesTags: (_res, _err, id) => [{ type: "Ride" as const, id }],
    }),
  }),
});

export const { useCreateRideRequestMutation, useGetMyRidesQuery, useCancelRideMutation,useGetRidesForRiderQuery,useGetRideByIdQuery } = rideApi;
