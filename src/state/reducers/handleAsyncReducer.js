import * as c from '../action-creators/action_types'
const initialState = {
	loading: false,
	data: [],
	error: ''
}

const reducer = (state = initialState, action) => {
	if (action.type === c.FETCH_DATA_REQUEST) {
		return {
			...state,
			loading: true
		}
	}
	else if (action.type === c.FETCH_DATA_SUCCESS) {
		return {
			...state,
			loading: false,
			data: action.payload,
			error: ''
		}
	}
	else if (action.type === c.FETCH_DATA_FAILURE) {
		return {
			...state,
			loading: false,
			data: [],
			error: action.payload
		}
	}
	else {
		return state
	}
}
export default reducer