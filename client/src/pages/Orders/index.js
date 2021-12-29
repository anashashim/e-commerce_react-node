import React , { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { listMyOrders } from '../../redux/actions/orderActions';
import './orders.css';

const Orders = ({history}) => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    const orderMylist = useSelector(state => state.orderMylist);
    const { loading:loadingOrders,error:errorOrders,orders } = orderMylist;
    const dispatch= useDispatch();

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else {
            dispatch(listMyOrders())
        }
    },[dispatch, userInfo])
    return (
        <div className="container">
            <h2>My Orders</h2>
            { orders 
                ? orders.map((order)=>
                    <div className='order'>
                        <div className="products-container">
                            <h2>ID#{order._id}</h2>
                            { order.orderItems.length === 0 ? <p>Your order is empty</p>:
                                <div className="products">
                                    { order.orderItems.map((item, index) => (  
                                        <p key={index} className='item'>
                                            <img src={item.image}/>
                                            <span className="name">{item.name}</span> 
                                            <b>{item.qty} x ${item.price} = ${item.qty * item.price}</b>
                                        </p>
                                    ))}
                                    
                                </div>
                            }    
                        </div>
                        <div className="summary">
                            <h2>Order Summary</h2>
                            <div className="calculs-placeorder">
                                <p>Total: <h4>${order.totalPrice}</h4></p>
                            </div>  
                        </div>
                    </div>
                ): <h1>No orders</h1>
        }
        </div>
    );
}

export default Orders;