import * as types from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  savedNews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_SAVED_NEWS:
      return { ...state, isLoading: true };
    case types.GET_SAVED_NEWS_SUCCESS:
      return { ...state, isLoading: false, savedNews: action.newsArticles };
    case types.GET_SAVED_NEWS_FAIL:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
}
