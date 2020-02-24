import { combineReducers } from "redux";
import news from "./newsReducer";
import userSignUp from "./signUpReducer";
import userLogin from "./loginReducer";
import saveNews from "./saveNewsReducers";

const rootReducer = combineReducers({
  news,
  userSignUp,
  userLogin,
  saveNews
});

export default rootReducer;
