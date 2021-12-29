import { React, useState, useEffect } from 'react';
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from 'react-redux';

const CardProduct = ({product}) => {
    const [ quantity, setQuantity ] = useState(0);
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.cart);
    const { cartItems } = Cart;

    useEffect(() => {
       const productInCart = cartItems.find(x => x.product === product._id);
       setQuantity(productInCart ? productInCart.qty : 0);
       return () => {  
       }
    },);

    const addQuantity = ()=>{
        const qty = quantity+1;
        dispatch(addToCart(product._id, qty));
        console.log(qty);
        setQuantity(qty);
    }

    const removeQuantity = () => {
        const qty = quantity-1;
        if(qty!==0) dispatch(addToCart(product._id,qty));
        else dispatch(removeFromCart(product._id));
        console.log(qty);
        setQuantity(qty);
    }
    return (
        <>  
            <div className='card-product'>           
                <div className='imgDiv'>
                    <img className='imgProduct' src={product.image} />  
                </div>
                <div className='bottomcard'>   
                    <h4>{product.name}</h4>
                    <div className='cart-info'>
                        <span disabled={quantity===0} onClick={removeQuantity}>-</span>
                        {' '}{ quantity }{' '}
                        <span onClick={addQuantity}>+</span>  
                    
                    </div>
                    <div className ='productpricecard'> {`${product.price} $`}</div>          
               </div> 
             </div>      
         </>
    )
}

export default CardProduct;
