import * as c from './action_types'

export const fetchDataRequest = () => {
	return {
		type: c.FETCH_DATA_REQUEST
	}
}

export const fetchDataSuccess = (data) => {
	return {
		type: c.FETCH_DATA_SUCCESS,
		payload: data
	}
}

export const fetchDataFailure = (error) => {
	return {
		type: c.FETCH_DATA_FAILURE,
		payload: error
	}
}

export const addToCart = (amount, cartData) => {
	return {
		type: c.ADD_TO_CART,
		payload: { amount, cartData }
	}
}

export const removeFromCart = (amount, cartData) => {
	return {
		type: c.REMOVE_FROM_CART,
		payload: { amount, cartData }
	}
}

export const clearCart = (amount, cartData) => {
	return {
		type: c.CLEAR_CART,
		payload: { amount, cartData }
	}
}

// export const addToCart = (amount) => {
// 	return (dispatch) => {
// 		dispatch({
// 			type: 'add',
// 			payload: amount
// 		})
// 	}
// }