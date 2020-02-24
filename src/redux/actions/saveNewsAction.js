import * as types from "../actionTypes/actionTypes";

export const saveNewsArticles = data => {
  return {
    type: types.SEARCH_NEWS_ARTICLES,
    data
  };
};

export const saveNewsArticlesSuccess = response => {
  return {
    type: types.SEARCH_NEWS_ARTICLES_SUCCESS,
    response
  };
};

export const saveNewsArticlesFail = response => {
  return {
    type: types.SEARCH_NEWS_ARTICLES_FAIL,
    response
  };
};
