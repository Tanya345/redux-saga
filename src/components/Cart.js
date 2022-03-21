import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Cart = () => {
	const dispatch = useDispatch()
	let cartItems = useSelector(state => state.amount_count.data)
	const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch);
	const ids = useSelector(state => state.amount_count.ids)

	return (
		cartItems.length > 0 ? cartItems.map((e) => {
			return (
				<div className="card mx-4 my-3 d-flex flex-column" style={{ width: "19rem" }} key={e.id}>
					<div id='flag'>
						<p id="category">{e.category}</p>
					</div>
					<img src={e.image} className="card-img-top" alt="img" />
					<p className='align-self-end mx-3 my-1' style={{ color: 'red' }}>{"Rs. " + e.price}</p>

					<div className="card-body d-flex flex-column justify-content-center">
						<h6 role="button" className="card-title text-center" >{e.title + "..."}</h6>
						<button disabled={!ids.includes(e.id)} className="btn btn-sm btn-primary mx-2" onClick={() => {
							removeFromCart(Math.round(e.price), e)
						}}>Remove from cart</button>
					</div>
				</div>
			)
		}) :
			<p className="h-100 d-flex justify-content-center align-items-center fs-5">Sorry, Your Cart is Empty</p>

	)
}

export default Cart