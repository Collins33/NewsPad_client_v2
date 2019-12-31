import { combineReducers } from "redux";
import news from "./newsReducer";
import userSignUp from "./signUpReducer";

const rootReducer = combineReducers({
  news,
  userSignUp
});

export default rootReducer;
