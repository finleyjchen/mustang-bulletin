import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    devToolsEnhancer()));

export default store;
