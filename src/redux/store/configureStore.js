import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index";
import rootSagas from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();
const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = tool;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, middleware);

const token = localStorage.getItem("jwt-token");
axios.defaults.headers.common["Authorization"] = token;

sagaMiddleware.run(rootSagas);

export default store;
