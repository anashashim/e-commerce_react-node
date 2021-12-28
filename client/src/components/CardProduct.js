import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from 'react-redux';

const CardProduct = ({product}) => {
    const [ showbtn, setShowbtn ] = useState(false);
    const [ Incart, setIncart ] = useState(false);
    const dispatch = useDispatch();
    const Cart = useSelector(state => state.cart);
    const { cartItems } = Cart;

    useEffect(() => {
       const isincart = cartItems.find(x => x.product === product._id);
       if(isincart) setIncart(true);
       return () => {  
       }
    },);

    const addcart = ()=>{
        setIncart(true);
        dispatch(addToCart(product._id,1))
    }
    return (
        <>  
            <div className='card-product' 
                onMouseOver={ ()=> {setShowbtn (true)}} 
                onMouseLeave= { ()=> {setShowbtn (false)}}>           
                <div className='imgDiv'>
                    <img className='imgProduct' boxSize='350px' objectFit='cover' src={product.image} />  
                </div>
                <div className='bottomcard'>   
                    <h4>{product.name}</h4>
                    <div className='cart-info'>
                    { Incart 
                        ? <span>-</span>
                        : <span onClick = {addcart}>+</span>  
                    }
                    </div>
                    <div className ='productpricecard'> {`${product.price} $`}</div>          
               </div> 
             </div>      
         </>
    )
}

export default CardProduct;
