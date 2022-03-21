import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import trolley from '../trolley.png'
import '../App.css'
import { clearCart } from '../state/action-creators'
import Cart from './Cart'


export default function Navbar() {
	const dispatch = useDispatch()
	const stateAmount = useSelector(state => state.amount_count.amount)
	const stateCart = useSelector(state => state.amount_count.count)
	const cartItems = useSelector(state => state.amount_count.data)

	const handleCheckOut = () => {
		dispatch(clearCart(stateAmount, cartItems))
	}

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Your Wish</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">Home</a>
							</li>

						</ul>
						<div className='d-flex flex-wrap justify-content-center'>
							<div className='position-relative'>
								<img className='w-2rem mx-2' src={trolley} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" alt="cartImg" />
								{/* <button className="btn btn-primary" type="button"  >Toggle right offcanvas</button> */}

								<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
									<div className="offcanvas-header mt-4">
										<h5 id="offcanvasRightLabel">Your Cart Items</h5>
										<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
									</div>
									<div className="offcanvas-body">
										<Cart />
										{cartItems.length > 0 && <button className="btn btn-warning" onClick={handleCheckOut}>CheckOut: {stateAmount}</button>}

									</div>
								</div>
								<span className='trackCart'>{stateCart}</span>
							</div>
							<button className="btn-primary btn btn-sm mx-2">Amount Payble: {stateAmount}</button>

						</div>
					</div>
				</div>
			</nav >
		</div >
	)
}
