import * as types from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  news: [],
  error: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      return { ...state, isLoading: true };
    case types.GET_ALL_NEWS_SUCCESS:
      return { ...state, isLoading: false, news: action.news };
    case types.GET_ALL_NEWS_FAIL:
      return { ...state, isLoading: false, error: true };
    case types.SEARCH_NEWS_ARTICLES:
      return { ...state, isLoading: true };
    case types.SEARCH_NEWS_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, news: action.news };
    case types.SEARCH_NEWS_ARTICLES_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
}
