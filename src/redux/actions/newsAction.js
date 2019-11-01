import * as types from "../actionTypes/actionTypes";

/**
 * Return an action type
 *
 */
export const getNewsArticles = () => {
  return {
    type: types.GET_ALL_NEWS
  };
};
