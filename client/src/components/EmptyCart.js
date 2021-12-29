import React from 'react';
import { Link } from "react-router-dom";


const EmptyCart = () => {
    return (
        <div className='emptycart'>
            <div className = 'textempty'>
            <h2>
                Wow Such an empty Cart
            </h2>
            <Link to = '/' className ='goshop'>
            Go Shop
            </Link>
            </div>
        </div>
    )
}

export default EmptyCart
