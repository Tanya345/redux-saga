import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./reducers/index";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)))
sagaMiddleware.run(rootSaga)

let obj = store.getState()
console.log(obj)
// console.log(store.dispatch())
// store.subscribe(() => { })