import * as s from './sagas'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
	yield all([
		s.fetchProducts(),
		// s.watchFetchProducts()
		// s.addToCartAsync(),
		// s.watchAddToCartAsync()
	])
}