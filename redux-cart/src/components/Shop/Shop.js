import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../redux/action/ÇartAction';

const Shop = (props) => {
    console.log("props", props);
    const { products, addToCart } = props
    return (
        <div>
            <h3>this is shop components</h3>
            {
                props.products.map(pd =>
                    < Product
                        product={pd}
                        addToCart={addToCart}
                        key={pd.id}
                    />)
            }
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart,
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// // and that function returns the connected, wrapper component:
// connectToStore(Shop)
// connect(mapStateToProps, mapDispatchToProps)(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);