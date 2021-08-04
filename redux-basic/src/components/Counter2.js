import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './services/actions/counterAction';


const Counter2 = () => {
    const count = useSelector((state) => state.counterReducer.count) //useSelector function amader ke count value return korbe ja count variable e store korbo
    console.log(useSelector(state => state.counterReducer));
    // redux store er data gulu niye ase
    // The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.
    //  The selector will be called with the entire Redux store state as its only argument.
    //const dispatch = useDispatch(function)// useDispatch ekta function niye thake
    const dispatch = useDispatch()  //dispatch ke actoin er modhe chure mara 
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={() => dispatch(increment(2))}>Increment</button>
            <button onClick={() => dispatch(decrement(2))}>Decrement</button>

        </div>
    );
};

export default Counter2;