import * as types from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  error: "",
  message: "none",
  token: "",
  email: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return { ...state, isLoading: true };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        message: action.message,
        token: action.token,
        email: action.email
      };
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        message: "Authentication failed. Try again",
        error: true
      };
    default:
      return state;
  }
}
