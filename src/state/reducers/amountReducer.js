import * as c from '../action-creators/action_types'

const initialState = {
	amount: 0,
	count: 0,
	ids: [],
	data: []
}
const reducer = (state = initialState, action) => {
	if (action.type === c.ADD_TO_CART) {
		return {
			...state,
			amount: state.amount + action.payload.amount,
			count: state.count + 1,
			ids: state.ids.concat(action.payload.cartData.id),
			data: state.data.concat(action.payload.cartData)
		}
	}
	else if (action.type === c.REMOVE_FROM_CART) {
		return {
			...state,
			amount: state.amount - action.payload.amount,
			count: state.count - 1,
			ids: state.ids.filter((e) => { return e !== action.payload.cartData.id }),
			data: state.data.filter((e) => { return e.id !== action.payload.cartData.id })
		}
	}
	else if (action.type === c.CLEAR_CART) {
		return {
			...state,
			amount: state.amount - action.payload.amount,
			count: 0,
			data:[],
			id:[]
		}
	}
	else {
		return state;
	}
}
export default reducer