import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decQty, emptyCart, incQty, removeFromCart } from '../../redux/slices/public.slice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.public)
    if (cart.length === 0) {
        return <>
            <div className='d-flex flex-column align-items-center'>
                <h1>Cart is Empty</h1>
                <Link to="/">shop now</Link>
            </div>
        </>
    }
    const handlePrice = () => {
        const price = cart.reduce((sum, item) => sum + (item.qty * item.price), 0)
        const discount = price * 5 / 100
        const total = price - discount
        return { price, discount, total }
    }
    return <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <span>Cart Items</span>
                            <button className='btn btn-sm btn-outline-danger' onClick={e => dispatch(emptyCart())}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>


                        {
                            cart.map(item => <div>
                                <div class="card-body">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src={item.image} height={100} alt="" />
                                            <div className='mt-3 d-flex'>
                                                <button className='btn btn-sm btn-outline-danger' onClick={e => dispatch(decQty(item.id))}>-1</button>
                                                <strong>{item.qty}</strong>
                                                <button className='btn btn-sm btn-outline-success' onClick={e => dispatch(incQty(item.id))}>+1</button>
                                            </div>
                                            <button className='btn btn-sm btn-outline-danger mt-2' onClick={e => dispatch(removeFromCart(item.id))}>remove</button>
                                        </div>
                                        <div>
                                            <h6>{item.name}</h6>
                                            <h6>{item.price}</h6>
                                            <h6>{item.desc}</h6>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <div class="card-header">Price Details</div>
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <strong>Price ({cart.length} items)</strong>
                                <strong>
                                    ₹{handlePrice().price}
                                </strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong>Discount</strong>
                                <strong className='text-success'>
                                    ₹{handlePrice().discount}
                                </strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong>Delivery Charges</strong>
                                <strong className='text-success'> <del>₹80</del> free</strong>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <strong>Total Amount</strong>
                                <strong>
                                    ₹{handlePrice().total}
                                </strong>
                            </div>

                        </div>
                    </div>
                    <Link to="/checkout" type="button" class="btn btn-primary w-100 mt-3">
                        <i className="bi bi-wallet me-3"></i>
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Cart