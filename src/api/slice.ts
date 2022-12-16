/* eslint-disable react-hooks/rules-of-hooks */

import axios, { AxiosError, Method } from "axios";
import { useCallback, useEffect, useState } from "react";

type ResponseModel<T = unknown> = {
  meta: {
    error: {
      code: number;
      message: string;
    } | null;
    status: number;
  };
  data: T;
};

type RequestOptions = {
  auth?: boolean;
  headers?: Record<string, string>;
};

type UseApiError = { code: number; message: string };
type UseApi<T> = {
  reload: () => void;
  data: T | null;
  loading: boolean;
  error: UseApiError | null;
  success: boolean;
};

export default class ApiSlice {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  static baseURL: string = "https://shop-api.aitschool.am";
  static defaultAuth = false;

  static async request<T = unknown>(
    url = "",
    method: Method = "GET",
    payload: Record<string, unknown> | FormData | null = null,
    options: RequestOptions | null = null
  ): Promise<ResponseModel<T>> {
    let headers: { Authorization?: string } = {};
    console.log(localStorage.getItem("accessToken"));
    if (this.defaultAuth || options?.auth) {
      headers.Authorization = `Bearer ${
        localStorage.getItem("accessToken") || process.env.TEST_TOKEN
      }`; // for most of requests;
    }

    if (options?.headers) headers = { ...headers, ...options.headers };

    try {
      const rsp =
        (await axios({
          method,
          url: this.baseURL + url,
          headers,
          data: payload || {},
          responseType: "json",
        })) || {};
      return rsp.data;
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const response = (err as AxiosError<ResponseModel<T>>).response!.data;
      return response;
    }
  }

  static async refreshToken() {
    const rsp = await ApiSlice.request<{ accessToken: string }>(
      `/auth/refreshToken?refreshToken=${localStorage.getItem("refreshToken")}`
    );
    if (rsp.meta.error) return false;
    localStorage.setItem("accessToken", rsp.data.accessToken);
    return true;
  }

  static handleWrongRefreshToken: null | (() => void) = null;

  static useApi<T>(
    fetcher: () => Promise<ResponseModel<T>>,
    params?: unknown[]
  ): UseApi<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setUseApiError] = useState<UseApiError | null>(null);

    const getData = useCallback(async () => {
      const rsp = await fetcher();
      setLoading(false);
      if (!rsp.meta.error) {
        setData(rsp.data);
        if (error) setUseApiError(null);
      } else {
        if (data) setData(null);
        setUseApiError({
          code: rsp.meta.error.code,
          message: rsp.meta.error.message,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(params || [])]);

    const reload = useCallback(() => getData(), [getData]);

    useEffect(() => {
      getData();
    }, [getData]);

    return {
      data,
      loading,
      success: Boolean(!loading && !error),
      error,
      reload,
    };
  }
}
