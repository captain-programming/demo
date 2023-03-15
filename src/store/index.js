import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { taskManagerReducer } from "./reducer";

export const store = legacy_createStore(taskManagerReducer, applyMiddleware(compose(thunk)));