import * as types from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_NEWS:
      return { ...state, isLoading: true };
    case types.SAVE_NEWS_SUCCESS:
      return { ...state, isLoading: false };
    case types.SAVE_NEWS_FAIL:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
}
