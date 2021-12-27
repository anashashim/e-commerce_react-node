import React from 'react';

const DemoProducts = [
    {
        id: 1,
        title: 'Some title 1',
        description: 'Some Description 1',
        imageUrl: 'https://picsum.photos/id/1/50/50',
        quantity: 2
    },
    {
        id: 2,
        title: 'Some title 2',
        description: 'Some Description 2',
        imageUrl: 'https://picsum.photos/id/2/50/50',
        quantity: 1
    }
]

const Cart = () => {
    return (
        <div className = 'shoppage'>
            {
                DemoProducts.map((product)=>
                <div key={product.id}>
                    <img src={product.imageUrl} />
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
                )
            }
        </div>
    )
}

export default Cart;
