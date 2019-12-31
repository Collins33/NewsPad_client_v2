import * as types from "../actionTypes/actionTypes";

export const signUpUser = userData => {
  console.log(userData, "1");
  return {
    type: types.SIGN_UP_USER,
    userData
  };
};

export const signUpUserSuccess = response => {
  return {
    type: types.SIGN_UP_USER_SUCCESS,
    response
  };
};

export const signUpUserFail = response => {
  return {
    type: types.SIGN_UP_USER_FAIL,
    response
  };
};
