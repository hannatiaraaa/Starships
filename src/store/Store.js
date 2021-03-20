import { applyMiddleware, createStore } from "redux";

// reducer
import { CombineReducers } from "./CombineReducers";

// middleware
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";

// saga
import { SagaWatcher } from "./SagaWatcher";

const SagaMiddleWare = createSagaMiddleWare();

const AllMiddleWare = applyMiddleware(SagaMiddleWare, logger);

export const Store = createStore(CombineReducers, AllMiddleWare);

SagaMiddleWare.run(SagaWatcher);
