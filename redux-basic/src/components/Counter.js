import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from './services/actions/counterAction';

const Counter = ({ increment, decrement, count }) => {
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={() => increment(5)}>Increment</button>
            <button onClick={() => decrement(1)}>Decrement</button>

        </div>
    );
};

const mapStateToProps = (state) => ({
    //state=store theke ja ja data ace ta amra pabo kintu eknae just counter er value drkar tay count: state.counterReducer.count
    // where counterReducer = combine reducer = index.js
    count: state.counter.count
    // ekane je count er value paici ta amra props akare pabo
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
//connect => short Keyword
// export default connect(mapStateToProps, mapDispatchToProps)(containerName)

//mapStateToProps => redux er store er data => store theke data niye asa
//  increment, decrement  => need action  

// mapStateToProps may receive two parameters:
// example - mapStateToProps(state, ownProps)

// state - Current state in the Redux store or store.getState().

// ownProps - (optional) If a component needs data from props to get back data from the store.

// Return value determines re-render