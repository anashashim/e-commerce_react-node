import React from 'react';

const DemoProducts = [
    {
        id: 1,
        title: 'Some title 1',
        description: 'Some Description 1',
        imageUrl: 'https://picsum.photos/id/1/200/200'
    },
    {
        id: 2,
        title: 'Some title 2',
        description: 'Some Description 2',
        imageUrl: 'https://picsum.photos/id/2/200/200'
    },
    {
        id: 3,
        title: 'Some title 3',
        description: 'Some Description 3',
        imageUrl: 'https://picsum.photos/id/3/200/200'
    },
    {
        id: 4,
        title: 'Some title 4',
        description: 'Some Description 4',
        imageUrl: 'https://picsum.photos/id/4/200/200'
    }
]

const Shop = () => {
    return (
        <div className = 'shoppage'>
            {
                DemoProducts.map((product)=>
                <div key={product.id}>
                    <img src={product.imageUrl} />
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                </div>
                )
            }
        </div>
    )
}

export default Shop
