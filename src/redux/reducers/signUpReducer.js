import * as types from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  response: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_UP_USER:
      return { ...state, isLoading: true };
    case types.SIGN_UP_USER_SUCCESS:
      return { ...state, isLoading: false, response: action.response };
    case types.SIGN_UP_USER_FAIL:
      return { ...state, isLoading: false, response: action.response };
    default:
      return state;
  }
}
