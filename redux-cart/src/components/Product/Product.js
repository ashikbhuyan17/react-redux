import React from 'react';

const Product = (props) => {
    console.log(props);
    const { name, id } = props.product
    return (
        <div style={{ border: '1px solid tomato', margin: '10px', padding: '10px' }}>
            <h1>{name}</h1>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;