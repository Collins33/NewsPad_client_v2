import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import SavedNewsApi from "../api/getNewsApi";
import {
  getSavedNewsArticleSuccess,
  getSavedNewsArticleFail
} from "../actions/getNewsAction";
require("dotenv").config();

function* fetchSavedNewsSaga(action) {
  try {
    const news = yield call(SavedNewsApi.getNewsArticles);
    const data = news.data.articles;
    yield put(getSavedNewsArticleSuccess(data));
  } catch (error) {
    yield put(getSavedNewsArticleFail());
  }
}
/**
 * Watcher saga
 */
export default function* watchFetchSavedNews() {
  yield takeLatest(types.GET_SAVED_NEWS, fetchSavedNewsSaga);
}
