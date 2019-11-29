import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import NewsApi from "../api/newsApi";
import {
  getNewsArticlesSuccess,
  getNewsArticlesFail
} from "../actions/newsAction";
require("dotenv").config();

function* fetchNewsSaga(action) {
  try {
    const news = yield call(NewsApi.getNewsArticles);
    const data = news.data.articles;
    yield put(getNewsArticlesSuccess(data));
  } catch (error) {
    yield put(getNewsArticlesFail());
  }
}
/**
 * Watcher saga
 */
export default function* watchFetchNews() {
  yield takeLatest(types.GET_ALL_NEWS, fetchNewsSaga);
}
