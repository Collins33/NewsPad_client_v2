import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import SignUpApi from "../api/signUpApi";
import { signUpUserSuccess, signUpUserFail } from "../actions/signUpUserAction";
require("dotenv").config();

function* signUpUserSaga(action) {
  try {
    const userResults = yield call(SignUpApi.signUpUser, action.userData);
    const responseMessage = userResults.data.message;
    yield put(signUpUserSuccess(responseMessage));
  } catch (error) {
    yield put(signUpUserFail());
  }
}

// watcher saga
export default function* watchSignUpSaga() {
  yield takeLatest(types.SIGN_UP_USER, signUpUserSaga);
}
