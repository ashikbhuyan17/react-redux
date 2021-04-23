import React from 'react';

const Product = (props) => {
    // console.log(props);
    const { addToCart, product } = props
    return (
        <div style={{ border: '1px solid tomato', margin: '10px', padding: '10px' }}>
            <h1>{product.name}</h1>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
    );
};

export default Product;