import React from 'react';
import { Link } from "react-router-dom";


const EmptyCart = () => {
    return (
        <div className='Emptycart'>
            <div className = 'textempty'>
            <h1>
                Wow Such an empty Cart
            </h1>
            <Link to = '/' className ='goshop'>
            Go Shop
            </Link>
            </div>
        </div>
    )
}

export default EmptyCart
