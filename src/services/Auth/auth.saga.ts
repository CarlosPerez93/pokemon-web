import { put, takeLatest, all } from "redux-saga/effects";

import api from "../../api";
import { LoginAction, State } from "./auth.types";
import { ResponseFetch } from "../../utils/api/api.util";
import { ClearData, SaveItem } from "../../utils/storage";
import { Status } from "../../utils/constants/status.enum";
import { login, loginSuccess, loginFailed, logout } from "./auth.slice";
import {
  errorMessage,
  successMessage,
} from "../../utils/notifications/message.action";

function* fetchLogin({ payload }: LoginAction) {
  try {
    const res: ResponseFetch<State> = yield api.auth.login({
      ...payload,
      device: "Desktop",
    });
    if (res && res.status === Status.success && res?.payload) {
      yield put(
        loginSuccess({
          token: res.payload.token,
          message: res.message,
          success: true,
          menu: res.payload.menu,
          fullName: res.payload.fullName,
          username: res.payload.username,
        })
      );
      SaveItem({ newItem: res?.payload.token });
      successMessage(res.message);
    } else {
      yield put(loginFailed({ error: true, message: res.message }));
      errorMessage(res.message);
    }
  } catch (e: any) {
    yield put(loginFailed({ error: true, message: e.message }));
  }
}

const handleLogout = () => ClearData();

function* ActionWatcher() {
  yield takeLatest(login, fetchLogin);
  yield takeLatest(logout, handleLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}
