import * as types from "../actionTypes/actionTypes";

export const saveNewsArticles = data => {
  return {
    type: types.SEARCH_NEWS_ARTICLES,
    data
  };
};

export const saveNewsArticlesSuccess = () => {
  return {
    type: types.SEARCH_NEWS_ARTICLES_SUCCESS
  };
};

export const saveNewsArticlesFail = () => {
  return {
    type: types.SEARCH_NEWS_ARTICLES_FAIL
  };
};
