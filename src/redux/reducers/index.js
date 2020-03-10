import { combineReducers } from "redux";
import news from "./newsReducer";
import userSignUp from "./signUpReducer";
import userLogin from "./loginReducer";
import saveNews from "./saveNewsReducers";
import getNews from "./getNewsReducer";

const rootReducer = combineReducers({
  news,
  userSignUp,
  userLogin,
  saveNews,
  getNews
});

export default rootReducer;
