import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import SearchNewsApi from "../api/searchNewsApi";
import {
  searchNewsArticlesSuccess,
  searchNewsArticleFail
} from "../actions/searchNewsActions";
require("dotenv").config();

function* searchNewsSaga(action) {
  try {
    const searchResults = yield call(
      SearchNewsApi.searchNewsArticles,
      action.query
    );
    const data = searchResults.data.articles;
    yield put(searchNewsArticlesSuccess(data));
  } catch (error) {
    yield put(searchNewsArticleFail());
  }
}

/**
 * Watcher saga
 */
export default function* watchSearchNews() {
  yield takeLatest(types.SEARCH_NEWS_ARTICLES, searchNewsSaga);
}
