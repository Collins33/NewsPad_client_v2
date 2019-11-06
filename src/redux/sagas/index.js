import { all } from "redux-saga/effects";
import watchFetchNews from "./newsSaga";
import watchSearchNews from "./searchNewsSaga";

export default function* rootSaga() {
  yield all([watchFetchNews(), watchSearchNews()]);
}
