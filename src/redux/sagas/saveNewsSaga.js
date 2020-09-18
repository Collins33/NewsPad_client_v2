import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../actionTypes/actionTypes";
import saveNewsApi from "../api/saveNewsApi";
import {
  saveNewsArticlesSuccess,
  saveNewsArticlesFail
} from "../actions/saveNewsAction.js";
import { toast } from "react-toastify";
import addTokenHeader from "../api/tokenHeaderHelper";

require("dotenv").config();

function* saveNewsSaga(action) {
  try {
    addTokenHeader();
    yield call(saveNewsApi.saveNewsArticles, action.data);
    yield put(saveNewsArticlesSuccess());
    toast.success("News article saved !", {
      position: toast.POSITION.TOP_CENTER
    });
  } catch (error) {
    console.log(error, "ERROR")
    yield put(saveNewsArticlesFail());
    toast.error("There was an error while saving !", {
      position: toast.POSITION.TOP_CENTER
    });
  }
}

/**
 * Watcher saga
 */
export default function* watchSaveNewsSaga() {
  yield takeLatest(types.SAVE_NEWS, saveNewsSaga);
}
