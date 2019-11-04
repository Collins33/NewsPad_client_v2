import { takeLatest, call } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import NewsApi from "../api/newsApi";

function* fetchNewsSaga(action) {
  try {
    const news = yield call(NewsApi.getNewsArticles);
    console.log(news);
  } catch (error) {
    console.log(error);
  }
}
/**
 * Watcher saga
 */
export default function* watchFetchNews() {
  yield takeLatest(types.GET_ALL_NEWS, fetchNewsSaga);
}
