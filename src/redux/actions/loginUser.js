import * as types from "../actionTypes/actionTypes";

export const loginUser = userData => {
  return {
    type: types.LOGIN_USER,
    userData
  };
};

export const loginUserSuccess = response => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    response
  };
};

export const loginUserFail = () => {
  return {
    type: types.LOGIN_USER_FAIL
  };
};
