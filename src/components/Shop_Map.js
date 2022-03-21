import React from 'react'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'
// import { store } from '../state/store'
import { connect } from 'react-redux';

// const { addToCart, removeFromCart, increaseCartCount, decreaseCartCount } = actionCreators;
const { addToCart, removeFromCart } = actionCreators

const Shop_Map = (props) => {
	// const dispatch = useDispatch();
	// const stateAmount = useSelector(state => state.amount)
	// const stateCart = useSelector(state => state.countCart)

	// const actions = bindActionCreators(actionCreators, dispatch);
	// const { addToCart, removeFromCart, increaseCartCount, decreaseCartCount } = bindActionCreators(actionCreators, dispatch);   // by destructuring actions object

	return (
		<div>
			<h2>Buy Mobile Cover 50 Rs</h2>

			{/* get state value by using useSelector hook of react-redux */}
			<button className="btn btn-primary mx-2" onClick={() => {
				props.addToCart(50)
			}}>+</button>
			Add to Cart
			<button disabled={props.stateCart === 0} className="btn btn-primary mx-2" onClick={() => {
				props.removeFromCart(50)
			}}>-</button>

		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		stateAmount: state.amount_count.amount,
		stateCart: state.amount_count.count
	}
}

// mapDispatchToProps as a function without bindActionCreators
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addToCart: (...args) => dispatch(addToCart(...args)),
// 		increaseCartCount: (...args) => dispatch(increaseCartCount(...args)),
// 		removeFromCart: (...args) => dispatch(removeFromCart(...args)),
// 		decreaseCartCount: (...args) => dispatch(decreaseCartCount(...args))
// 	}
// }

// mapDispatchToProps as a function with bindActionCreators
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		...bindActionCreators(actionCreators, dispatch)
// 	}
// }

// mapDispatchToProps as a object without bindActionCreators
// const mapDispatchToProps = {
// 	addToCart,
// 	increaseCartCount,
// 	removeFromCart,
// 	decreaseCartCount
// }

// mapDispatchToProps as a object without bindActionCreators
const mapDispatchToProps = {
	...actionCreators
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop_Map)