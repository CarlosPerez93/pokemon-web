import { Mutation } from "./core";
import { Methods } from "../utils/types/response.type";
import { LoginType } from "../services/Auth/auth.types";

//listado de endpoints, que se usaran en authService
const login = (body: LoginType) =>
  Mutation({ method: Methods.post, url: "auth/login", body });

const signUp = (body: LoginType) =>
  Mutation({ method: Methods.post, url: "auth/signup", body });

const forgotPassword = (body: any) =>
  Mutation({ method: Methods.post, url: "auth/request-forgot-password", body });

const setPassword = (body: any) =>
  Mutation({ method: Methods.patch, url: "auth/set-password", body });

const activateAccount = (body: any) =>
  Mutation({ method: Methods.post, url: "auth/active-account", body });

export default { login, signUp, forgotPassword, setPassword, activateAccount };
