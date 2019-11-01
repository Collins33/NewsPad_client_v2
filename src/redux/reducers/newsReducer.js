import * as types from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  news: [],
  error: ""
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      return { ...state, isLoading: true };
    case types.GET_ALL_NEWS_SUCCESS:
      return { ...state, news: action.news };
    case types.GET_ALL_NEWS_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
}
