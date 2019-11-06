import * as types from "../actionTypes/actionTypes";

export const searchNewsArticles = query => {
  return {
    type: types.SEARCH_NEWS_ARTICLES,
    query
  };
};

export const searchNewsArticlesSuccess = news => {
  return {
    type: types.SEARCH_NEWS_ARTICLES_SUCCESS,
    news
  };
};

export const searchNewsArticleFail = () => {
  return {
    type: types.SEARCH_NEWS_ARTICLES_FAIL
  };
};
