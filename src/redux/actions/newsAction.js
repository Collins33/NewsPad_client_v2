import * as types from "../actionTypes/actionTypes";

export const getNewsArticles = () => {
  return {
    type: types.GET_ALL_NEWS
  };
};

export const getNewsArticlesSuccess = news => {
  return {
    type: types.GET_ALL_NEWS_SUCCESS,
    news
  };
};

export const getNewsArticlesFail = () => {
  return {
    type: types.GET_ALL_NEWS_FAIL
  };
};
