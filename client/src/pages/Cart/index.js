import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import EmptyCart from '../../components/EmptyCart';
import CartProduct from '../../components/CartProduct';
import './cart.css';

const Cart = ({match,location,history}) => {
    const {id} = match.params;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;
    console.log(cartItems)
    useEffect(()=>{
        if(id) dispatch(addToCart(id,qty))
    },[dispatch,id,qty])

    const checkoutHandler =()=>{
        // history.push('./login?redirect=shipping');
        
    }

    return (
        <>
            { cartItems.length === 0 
            ? 
                <EmptyCart />
            :
                <div className ='cartfull'>
                    <div className = 'cart'>
                        <h1>Your Cart : {cartItems.length}</h1>
                        <div className ='productsoncart'>
                        { 
                            cartItems.map( product =>(
                                <CartProduct product={product} key={product.name}/>
                            ))
                        }
                        </div>

                    </div>
                    <div className = 'totalcart'>
                        <h3>
                            Subtotal ({cartItems.reduce((acc,item)=>acc+item.qty,0)} items) :
                        </h3>
                        <h3 className = 'totalprice'>
                            {cartItems.reduce((acc,item )=>
                                acc + item.qty * item.price,0

                            ).toFixed(2)}$
                        </h3>
                        <h3>
                            Total :
                        </h3>
                        <h3 className = 'totalprice'>
                            {cartItems.reduce((acc,item )=>
                                acc + item.qty * item.price,0

                            ).toFixed(2)}$
                        </h3>
                        <button className='checkoutbtn' disabled={cartItems.length===0} onClick={checkoutHandler}>
                            Checkout
                        </button>
                    </div>

                </div>
            }
        </>
    )
}

export default Cart
