import { fork } from "redux-saga/effects";
import watchFetchNews from "./newsSaga";

export default function* rootSaga() {
  yield fork(watchFetchNews);
}
