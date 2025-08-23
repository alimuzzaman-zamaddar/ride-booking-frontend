// src/redux/features/ride/ride.api.ts
import { baseApi } from "../../baseApi";
import type { Ride } from "../ride/ride.api";


export type OnlineResponse = {
  message: string;
  ride: Ride;
};

export const driverApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    goOnline: builder.mutation<OnlineResponse, string>({
      // arg = driverid
      query: driverid => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/ride/${driverid}/online`,
          method: "PATCH",
          headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        };
      },
      // @ts-ignore
      invalidatesTags: (_res, _err, driverId) => [
        { type: "Ride" as const, id: driverId },
        { type: "Ride" as const, id: "LIST" },
      ],
    }),
  }),
});

export const { useGoOnlineMutation } = driverApi;
