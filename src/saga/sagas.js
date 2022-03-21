import { fetchDataSuccess, fetchDataRequest, fetchDataFailure } from "../state/action-creators"
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects'
const api = 'https://fakestoreapi.com/products'

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// export function* watchFetchProducts() {
// 	// yield takeEvery('ADD_TO_CART', fetchProducts)
// 	yield takeLatest('ADD_TO_CART', fetchProducts)
// }

function a() {
	return fetch(api).then(res => res.json())
}
export function* fetchProducts() {
	try {
		const products = yield call(a)
		yield put(fetchDataSuccess(products))
	}
	catch (err) {
		yield put(fetchDataFailure(err))
	}
}

// export function* addToCartAsync() {
// 	yield delay(3000)
// 	yield put(addToCart(50))
// }

// export function* watchAddToCartAsync() {
// 	yield takeEvery('ADD_TO_CART', addToCartAsync)
// }

// export function* mySaga() {
// 	console.log("Hello My First Saga")
// }