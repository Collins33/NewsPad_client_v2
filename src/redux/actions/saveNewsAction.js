import * as types from "../actionTypes/actionTypes";

export const saveNewsArticles = data => {
  return {
    type: types.SAVE_NEWS,
    data
  };
};

export const saveNewsArticlesSuccess = () => {
  return {
    type: types.SAVE_NEWS_SUCCESS
  };
};

export const saveNewsArticlesFail = () => {
  return {
    type: types.SAVE_NEWS_FAIL
  };
};
