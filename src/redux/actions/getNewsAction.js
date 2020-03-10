import * as types from "../actionTypes/actionTypes";

export const getNewsArticle = () => {
  return {
    type: types.GET_SAVED_NEWS
  };
};

export const getNewsArticleSuccess = newsArticles => {
  return {
    type: types.GET_SAVED_NEWS_SUCCESS,
    newsArticles
  };
};

export const getNewsArticleFail = error => {
  return {
    type: types.GET_SAVED_NEWS_FAIL,
    error
  };
};
