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


export type Ride = {
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

    cancelRide: builder.mutation<CancelRideResponse, string>({
      query: rideId => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/ride/${rideId}/cancel`,
          method: "PATCH",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
      // The error you saw disappears once tagTypes includes "Ride"
      // @ts-ignore
      invalidatesTags: (_res, _err, rideId) => [
        { type: "Ride" as const, id: rideId },
        { type: "Ride" as const, id: "LIST" },
      ],
    }),
  }),
});

export const { useCreateRideRequestMutation, useGetMyRidesQuery, useCancelRideMutation } = rideApi;
