import React , {useRef,useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link } from 'react-router-dom';

import {logout} from '../redux/actions/userAction';

 const Nav = ({history}) => {
    const [ incart, setincart ] = useState(0);
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    const[ nav, setNav ]=useState(false)
    const Nav = useRef(null)
    const rightItems = useRef(null)
     //signin
    const [ signin, setSignin ] = useState(null);

    const onChangeBack= () =>{
        if(window.scrollY >= 60) setNav(true)
        else setNav(false)
    }
    window.addEventListener('scroll', onChangeBack);

    useEffect(() => {
        const cart = cartItems.length ? cartItems.length : 0 ;
        setincart(cart);
        return () => {
            setincart(0)
        }
    },[cart])

    const dispatch= useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    
    const logoutHandler = () => {
        dispatch(logout())
    }
    
    return (
       <nav ref = {Nav}  className={`nav ${nav ? 'active' : ''}`} >
            <div className="logo">
                <Link to='/'>AppName</Link>
            </div>
            <div className = "rightComp" ref = {rightItems}>
                <Link to='/cart' className='cart'> Cart
                    {userInfo && 
                        <div className='dotcart'>
                            {incart}
                        </div>
                    }
                </Link>

                {userInfo 
                    ? (
                        <ul className='user-links'>
                            <li>
                                <Link to = '/profile'>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to = '/orders'>
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <span size='28' className="displayIcon" onClick={logoutHandler}>Logout</span>
                            </li>
                        </ul>
                    ) 
                    :   <Link to='/login' > 
                            <div className='signin' 
                                onMouseOver={ () => setSignin(!signin)}  
                                onMouseOut={ ()=> setSignin(!signin) } > Sign in </div>
                        </Link>
                }
            </div>
        </nav>
    )                   
}
export default Nav                      