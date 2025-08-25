/* eslint-disable @typescript-eslint/ban-ts-comment */
// src/redux/features/admin/admin.api.ts
import { baseApi } from "../../baseApi";

export type User = {
  _id: string;
  email: string;
  role: "admin" | "driver" | "rider";
  isActive: boolean;
  isDeleted: boolean;
  isBlocked?: boolean;
  isOnline?: boolean;
  isApproved?: boolean;
  isSuspended?: boolean;
  vehicleInfo?: string;
  licenseNumber?: string;
  cost?: number;
  earning?: number;
  createdAt: string;
  updatedAt: string;
};

export type GetAllUsersResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: User[];
};

const authHeader = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

export const adminApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // GET /users/getall
    getAllUsers: builder.query<GetAllUsersResponse, void>({
      query: () => ({
        url: "/users/getall",
        method: "GET",
        headers: authHeader(),
      }),
      // @ts-ignore
      providesTags: result =>
        result
          ? [
              ...result.data.map(u => ({ type: "Users" as const, id: u._id })),
              { type: "Users" as const, id: "LIST" },
            ]
          : [{ type: "Users" as const, id: "LIST" }],
    }),

    // GET /users/:id
    getUserById: builder.query<{ data: User }, string>({
      query: userId => ({
        url: `/users/${userId}`,
        method: "GET",
        headers: authHeader(),
      }),
      // @ts-ignore
      providesTags: (_res, _err, id) => [{ type: "Users" as const, id }],
    }),

    // PATCH /users/block/:id  (body: { isBlocked: boolean })
    blockUser: builder.mutation<
      {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
          id: string;
          email: string;
          role: User["role"];
          isBlocked: boolean;
        };
      },
      { userId: string; isBlocked: boolean }
    >({
      query: ({ userId, isBlocked }) => ({
        url: `/users/block/${userId}`,
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        // using axiosBaseQuery → payload must be `data`
        data: { isBlocked },
      }),
      // @ts-ignore
      invalidatesTags: (_res, _err, { userId }) => [
        { type: "Users" as const, id: userId },
        { type: "Users" as const, id: "LIST" },
      ],
    }),




        approveDriver: builder.mutation<
      {
        statusCode: number;
        success: boolean;
        message: string;
        data: {
          id: string;
          email: string;
          role: "driver" | "admin" | "rider";
          isApproved: boolean;
        };
      },
      string // userId (driverId)
    >({
      query: (userId) => ({
        url: `/drivers/approve/${userId}`,
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        // no body needed if your API approves by path param only
      }),
      // @ts-ignore
      invalidatesTags: (_res, _err, userId) => [
        { type: "Users" as const, id: userId },
        { type: "Users" as const, id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
 useBlockUserMutation,
  useApproveDriverMutation
} = adminApi;
