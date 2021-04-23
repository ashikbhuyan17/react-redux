import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/action/ÇartAction';

const Cart = (props) => {
    console.log(props);
    const { cart, removeFromCart } = props
    return (
        <div>
            <h2>this is cart</h2>
            {
                cart.map(id => <li>{id}
                    <button onClick={() => removeFromCart(id)}>X</button>
                </li>)
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);