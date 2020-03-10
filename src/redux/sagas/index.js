import { all } from "redux-saga/effects";
import watchFetchNews from "./newsSaga";
import watchSearchNews from "./searchNewsSaga";
import watchSignUpSaga from "./signUpSaga";
import watchLoginInSaga from "./loginSaga";
import watchSaveNewsSaga from "./saveNewsSaga";
import watchFetchSavedNews from "./getSavedNewsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchNews(),
    watchSignUpSaga(),
    watchSearchNews(),
    watchLoginInSaga(),
    watchSaveNewsSaga(),
    watchFetchSavedNews()
  ]);
}
