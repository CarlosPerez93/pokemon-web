import { query } from "../../api/core/api.types";
import { HttpStatus } from "../types/response.type";
import { URL_API } from "../constants/environment.constant";

export const getHeader = (token: string | null) => {
  const exists = token !== null && { Authorization: `Bearer ${token}` };
  return {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "https://javascript.info",
      ...exists,
    },
  };
};

export const getUrl = ({ url, params }: query): URL => {
  const _url = new URL(`${URL_API}/${url}`);
  if (params)
    Object.keys(params).forEach((key) =>
      _url.searchParams.append(key, params[key])
    );

  return _url;
};

export const validateResponse = (status: string) => {};

interface BaseResponse {
  message: string;
  statusCode: HttpStatus;
}

interface Success<T> {
  payload: T;
  status: "success";
}

interface Error {
  status: "error";
}

export type ResponseFetch<T = unknown> = BaseResponse & (Success<T> | Error);
