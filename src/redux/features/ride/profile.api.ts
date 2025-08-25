// src/redux/features/profile/profile.api.ts
import { baseApi } from "../../baseApi";


export type Me = {
  _id: string;
  email: string;
  role: "admin" | "driver" | "rider";
  name?: string;
  phone?: string;
  isBlocked: boolean;
  isSuspended?: boolean;
  isApproved?: boolean;
  isActive: boolean;
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
};

// ✅ add this function here
const authHeader = () => {
  const token = localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<{ data: Me }, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        headers: authHeader(),
      }),
      providesTags: [{ type: "Me" as const, id: "SELF" }],
    }),

    updateMe: builder.mutation<
      { message: string; data: Me },
      Partial<Pick<Me, "name" | "phone">>
    >({
      query: body => ({
        url: "/auth/me",
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        data: body, // axiosBaseQuery uses `data`
      }),
      invalidatesTags: [{ type: "Me" as const, id: "SELF" }],
    }),

    changePassword: builder.mutation<
      { message: string },
      { oldPassword: string; newPassword: string }
    >({
      query: body => ({
        url: "/auth/me/change-password",
        method: "PATCH",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        data: body, // axiosBaseQuery expects `data`
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateMeMutation,
  useChangePasswordMutation,

} = profileApi;
