import * as types from "../actionTypes/actionTypes";

export const loginUser = userData => {
  return {
    type: types.LOGIN_USER,
    userData
  };
};

export const loginUserSuccess = (message, token, email) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    message,
    token,
    email
  };
};

export const loginUserFail = () => {
  return {
    type: types.LOGIN_USER_FAIL
  };
};
