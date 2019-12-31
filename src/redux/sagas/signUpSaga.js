import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import SignUpApi from "../api/signUpApi";
import {
  signUpUser,
  signUpUserSuccess,
  signUpUserFail
} from "../actions/signUpUserAction";
require("dotenv").config();

function* signUpUserSaga(action) {
  try {
    console.log(action, "2");
    const userResults = yield call(SignUpApi.signUpUser, action.userData);
    console.log(userResults, "<><><><><><><><><>");
  } catch (error) {
    console.log(error);
  }
}

// watcher saga
export default function* watchSignUpSaga() {
  yield takeLatest(types.SIGN_UP_USER, signUpUserSaga);
}
