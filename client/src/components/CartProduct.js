import React,{useRef,useState,useEffect} from 'react';
import { addToCart,removeFromCart } from '../redux/actions/cartActions';
import { useDispatch } from "react-redux";

const CartProduct = ({product}) => {
    const dispatch = useDispatch();

    const [qty,setqty] = useState(0)
    const select = useRef(null);
    useEffect(() => {
        console.log(product.images)
        return () => {
        }
    },[])

    const removeFromCartHandler  = (id) =>{
        dispatch(removeFromCart(id))
    }

    const addQuantity = () => {
        dispatch(addToCart(product.product,product.qty+1))
    }

    const removeQuantity = () => {
        const qty = product.qty-1;
        if(qty!==0) dispatch(addToCart(product.product,qty));
        else removeFromCartHandler(product.product);
    }

    return (
        <div className = 'productcart'>
            <div className = 'imagecart'>
                <img src={product.image}/>
            </div>
            <div>
                <h2 className = 'productname'>
                    {product.name}
                </h2>

                <h2 className = 'priceproduct'>
                    {product.price}$</h2>
            </div>
            <div className = 'qtyoption cart-info' >
                Quantity : 
                <span onClick={()=>addQuantity()}>+</span>
                {product.qty}
                <span onClick={()=>removeQuantity()}>-</span>
                <h2>
                    {(qty === 0 ? product.qty*product.price : qty*product.price).toFixed(2)}$
                </h2>
            </div>
            <span className='deletecart' onClick = {() => removeFromCartHandler(product.product)}>X</span>  
        </div>
    )
}

export default CartProduct;
