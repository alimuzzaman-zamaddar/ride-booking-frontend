// src/redux/features/api/axiosBaseQuery.ts
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import axios from "axios";

type AxiosBaseQueryConfig = {
  baseUrl: string;
  defaultHeaders?: Record<string, string>;
};

const axiosBaseQuery =
  ({
    baseUrl,
    defaultHeaders = {},
  }: AxiosBaseQueryConfig): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      includeToken?: boolean;
    },
    unknown,
    unknown
  > =>
  async ({
    url,
    method = "GET",
    data,
    params,
    headers = {},
    includeToken = false,
  }) => {
    try {
      const token = includeToken ? localStorage.getItem("token") : null;
      const isFormData = data instanceof FormData;

      const finalHeaders: AxiosRequestConfig["headers"] = {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...defaultHeaders,
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      };

      const result = await axios({
        url: `${baseUrl}${url}`,
        method,
        data: ["POST", "PUT", "PATCH"].includes(method.toUpperCase())
          ? data
          : undefined,
        params: ["GET", "DELETE"].includes(method.toUpperCase())
          ? params
          : undefined,
        headers: finalHeaders,
      });

      return { data: result.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status ?? 500,
          data: axiosError.response?.data ?? axiosError.message,
        },
      };
    }
  };

export default axiosBaseQuery;
