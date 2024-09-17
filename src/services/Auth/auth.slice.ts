import { createSlice } from "@reduxjs/toolkit";

import { GetItem, TokenIsValid } from "../../utils/storage";
import { AUTH } from "../../utils/constants/redux.constants";
import {
  LoginAction,
  LoginFailedType,
  LoginSuccessType,
  State,
} from "./auth.types";

export const initialState: State = {
  authentication: TokenIsValid(), //verification token
  error: false,
  loading: false,
  message: "",
  success: false,
  token: GetItem({}) ?? "", //the token
  username: "",
  menu: null,
  fullName: "",
};

export const AuthSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    login: (state, _: LoginAction) => ({
      ...state,
      error: false,
      loading: true,
    }),
    loginFailed: (state, { payload }: LoginFailedType) => ({
      ...state,
      error: payload.error,
      success: false,
      loading: false,
      message: payload.message,
      username: "",
    }),
    loginSuccess: (state, { payload }: LoginSuccessType) => ({
      ...state,
      authentication: true,
      error: false,
      loading: false,
      success: payload.success,
      token: payload.token,
      message: payload.message,
      menu: payload.menu,
      fullName: payload.fullName,
      username: payload.username,
    }),
    logout: (state) => ({
      ...state,
      authentication: false,
      error: false,
      loading: false,
      message: "",
      success: false,
      token: "", //the token
      username: "",
      menu: null,
    }),
  },
});

export const { login, loginFailed, loginSuccess, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
