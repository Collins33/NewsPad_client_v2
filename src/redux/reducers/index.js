import { combineReducers } from "redux";
import news from "./newsReducer";

const rootReducer = combineReducers({
  news
});

export default rootReducer;
