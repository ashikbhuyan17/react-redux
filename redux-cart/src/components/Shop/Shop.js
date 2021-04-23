import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {
            name: "lenovo laptops ",
            id: 1
        },
        {
            name: "Asus laptops ",
            id: 2
        },
        {
            name: "Dell laptops ",
            id: 3
        },
        {
            name: "Hp laptops ",
            id: 4
        },
    ]
    return (
        <div>
            <h3>this is shop components</h3>
            {
                products.map(pd => <Product product={pd} />)
            }
        </div>
    );
};

export default Shop;