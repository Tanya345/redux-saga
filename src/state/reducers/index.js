import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import handleAsyncReducer from './handleAsyncReducer'

export const rootReducer = combineReducers({
	amount_count: amountReducer,
	asyncTask: handleAsyncReducer
})
export default rootReducer