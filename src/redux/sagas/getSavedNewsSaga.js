import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import SavedNewsApi from "../api/getNewsApi";
import {
  getSavedNewsArticleSuccess,
  getSavedNewsArticleFail
} from "../actions/getNewsAction";
import addTokenHeader from "../api/tokenHeaderHelper";
require("dotenv").config();

function* fetchSavedNewsSaga(action) {
  try {
    addTokenHeader();
    const response = yield call(SavedNewsApi.getNewsArticles);
    const articles = response.data.news;
    yield put(getSavedNewsArticleSuccess(articles));
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
