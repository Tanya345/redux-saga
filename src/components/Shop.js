import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'
import Shop_Map from './Shop_Map';

let id = []
const Shop = () => {
	const dispatch = useDispatch();
	const stateAmount = useSelector(state => state.amount_count.amount)
	const stateCart = useSelector(state => state.amount_count.count)
	const loading = useSelector(state => state.asyncTask.loading)
	const myData = useSelector(state => state.asyncTask.data)
	const ids = useSelector(state => state.amount_count.ids)


	// const actions = bindActionCreators(actionCreators, dispatch);
	const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch);   // by destructuring actions object

	// console.log(myData);
	// console.log(loading);

	return (
		myData.map((e) => {
			return (
				<div className="card mx-4 my-3 d-flex flex-column" style={{ width: "19rem" }} key={e.id}>
					<div id='flag'>
						<p id="category">{e.category}</p>
					</div>
					<img src={e.image} className="card-img-top" alt="img" />
					<p className='align-self-end mx-3 my-1' style={{ color: 'red' }}>{"Rs. " + e.price}</p>
					<div className="card-body d-flex flex-column justify-content-center">
						<h6 role="button" className="card-title text-center" >{e.title + "..."}</h6>
						<div className="d-flex justify-content-between align-self-flex-end">
							<button disabled={ids.includes(e.id)} className="btn btn-sm btn-primary mx-2" onClick={() => {
								addToCart(Math.round(e.price), e)
							}}>Add to Cart</button>
							<button disabled={!ids.includes(e.id)} className="btn btn-sm btn-primary mx-2" onClick={() => {
								removeFromCart(Math.round(e.price), e)
							}}>Remove from cart</button>
						</div>
					</div>
				</div>
				// 	 <div key={e.id}>
				// <h2>Buy Mobile Cover 50 Rs</h2>

				/* get state value by using useSelector hook of react-redux */
				// {/* <button disabled={stateAmount === 0} className="btn btn-primary mx-2" onClick={() => {
				// 			addToCart(50)
				// 		}}>+</button>
				// 		Add to Cart
				// 		<button disabled={stateCart === 0} className="btn btn-primary mx-2" onClick={() => {
				// 			removeFromCart(50)
				// 		}}>-</button>

				// 	</div>)  */}
			)
		}
		))


}

export default Shop
// {/* Without bindActionCreators */ }
// // {/* <button disabled={stateAmount === 0} className="btn btn-primary mx-2" onClick={() => store.dispatch(actionCreators.addToCart(50))}>+</button>
// // Add to Cart
// // <button className="btn btn-primary mx-2" onClick={() => dispatch(actionCreators.removeFromCart(50))}>-</button> */}

// {/* With bindActionCreators */ }

// {/* get state value from store.getState() method */ }
// {/* <button disabled={store.getState().amount === 0} className="btn btn-primary mx-2" onClick={() => {
// 				addToCart(50)
// 				increaseCartCount(1)
// 			}}>+</button> */}
