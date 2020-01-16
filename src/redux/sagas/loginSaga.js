import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import LoginApi from "../api/loginApi";
import { signUpUserSuccess, signUpUserFail } from "../actions/signUpUserAction";
require("dotenv").config();

function* loginUserSaga(action) {
  try {
    const userResults = yield call(LoginApi.loginUser, action.userData);
    const responseMessage = userResults.data.message;
    yield put(signUpUserSuccess(responseMessage));
  } catch (error) {
    yield put(signUpUserFail());
  }
}

// watcher saga
export default function* watchLoginInSaga() {
  yield takeLatest(types.LOGIN_USER, loginUserSaga);
}
