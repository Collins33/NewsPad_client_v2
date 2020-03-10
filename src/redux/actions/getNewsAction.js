import * as types from "../actionTypes/actionTypes";

export const getSavedNewsArticle = () => {
  return {
    type: types.GET_SAVED_NEWS
  };
};

export const getSavedNewsArticleSuccess = newsArticles => {
  return {
    type: types.GET_SAVED_NEWS_SUCCESS,
    newsArticles
  };
};

export const getSavedNewsArticleFail = () => {
  return {
    type: types.GET_SAVED_NEWS_FAIL
  };
};
