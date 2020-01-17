import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import LoginApi from "../api/loginApi";
import { loginUserSuccess, loginUserFail } from "../actions/loginUserActions";
require("dotenv").config();

function* loginUserSaga(action) {
  try {
    const userResults = yield call(LoginApi.loginUser, action.userData);
    const responseMessage = userResults.data;
    const { message, token, email } = responseMessage;
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    yield put(loginUserSuccess(message, token, email));
  } catch (error) {
    yield put(loginUserFail());
  }
}

// watcher saga
export default function* watchLoginInSaga() {
  yield takeLatest(types.LOGIN_USER, loginUserSaga);
}
