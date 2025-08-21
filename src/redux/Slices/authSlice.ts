/* eslint-disable @typescript-eslint/no-explicit-any */
// src/redux/features/api/authSlice.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery"; // Custom axios base query

const SiteURl = import.meta.env.VITE_SERVER_BASE_URL as string; // URL for the API

// Define the structure of user data
export interface UserData {
  name: string;
  email: string;
  password: string;
  agree_to_terms: boolean;
  role: "tutor" | "student";
  id: number;
}

// Define the structure of the registration response
export interface RegistrationResponse {
  success: boolean;
  message: string;
  data: UserData;
  code: number;
}

// Define the structure of OTP verification response
export interface OTPVerifyResponse {
  success: boolean;
  message: string;
  code: number;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  code: number;
  data: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    role: "student" | "tutor";
    avatar: string | null;
    gender: string | null;
    date_of_birth: string | null;
    provider: string | null;
    provider_id: string | null;
    agree_to_terms: boolean;
    is_onboarded: number;
    lesson_reminder: number;
    payment_remider: number;
    message_alert: number;
    token: string;
  };
}


export const authSlice = createApi({
  reducerPath: "authApi", // The slice's unique name in the Redux store
  baseQuery: axiosBaseQuery({ baseUrl: SiteURl }), // Using the custom base query with axios
  tagTypes: ["Auth"], // Optional, used for caching & refetching logic
  endpoints: builder => ({
    // Register user mutation
    registerUser: builder.mutation<RegistrationResponse, FormData>({
      query: formData => ({
        url: "/users/register",
        method: "POST",
        data: formData, // Sending formData with the request
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // ========== LOGIN ==========
    loginUser: builder.mutation<LoginResponse, FormData>({
      query: formData => ({
        url: "/users/login",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // OTP verification mutation
    verifyOTP: builder.mutation<OTPVerifyResponse, FormData>({
      query: formData => ({
        url: "/users/register/otp-verify", // Endpoint for OTP verification
        method: "POST",
        data: formData, // Sending email and OTP data
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // ========== OTP RESEND ==========
    resendOTP: builder.mutation<void, FormData>({
      query: formData => ({
        url: "/users/register/otp-resend",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // ========== VerifyEmail ==========
    verifyEmail: builder.mutation<
      { success: boolean; message: string },
      FormData
    >({
      query: formData => ({
        url: "/users/login/email-verify",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // ========== reset password ==========
    resetPassword: builder.mutation<any, FormData>({
      query: formData => ({
        url: "/users/login/reset-password",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // ========== SOCIAL LOGIN ==========
    socialLoginUser: builder.mutation<LoginResponse, FormData>({
      query: formData => ({
        url: "/social-login",
        method: "POST",
        data: formData,
        headers: {
          Accept: "application/json",
        },
      }),
    }),

    // ========== LOGOUT USER ==========
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: "/users/logout", // Logout API endpoint
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),

    getUserData: builder.query({
      query: () => ({
        url: "/users/data",
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      }),
      providesTags: ["Auth"],
    }),

 
    
    changePassword: builder.mutation<any, FormData>({
      query: formData => ({
        url: "/users/password/change",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

// Export hooks for using the mutations
export const { useRegisterUserMutation, useVerifyOTPMutation, useLoginUserMutation, useResendOTPMutation, useVerifyEmailMutation,useResetPasswordMutation,useSocialLoginUserMutation, useLogoutUserMutation, useGetUserDataQuery, useChangePasswordMutation } = authSlice;
