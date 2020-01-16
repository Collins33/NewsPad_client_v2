import { combineReducers } from "redux";
import news from "./newsReducer";
import userSignUp from "./signUpReducer";
import userLogin from "./loginReducer";

const rootReducer = combineReducers({
  news,
  userSignUp,
  userLogin
});

export default rootReducer;
