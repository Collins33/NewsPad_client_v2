import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import saveNewsApi from "../api/saveNewsApi";
import {
  saveNewsArticlesSuccess,
  saveNewsArticlesFail
} from "../actions/saveNewsAction.js";
require("dotenv").config();

function* saveNewsSaga(action) {
  try {
    saveNewsApi.setToken();
    const saveNewsResults = yield call(
      saveNewsApi.saveNewsArticles,
      action.data
    );
    yield put(saveNewsArticlesSuccess());
  } catch (error) {
    yield put(saveNewsArticlesFail());
  }
}

/**
 * Watcher saga
 */
export default function* watchSaveNewsSaga() {
  yield takeLatest(types.SAVE_NEWS, saveNewsSaga);
}
