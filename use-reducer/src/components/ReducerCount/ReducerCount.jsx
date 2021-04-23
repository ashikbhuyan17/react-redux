import React from 'react';


const initialState = {
    count: 0
}
const reducer = (state, action) => {

}
const ReducerCount = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <>
            this is
        </>
    );
};

export default ReducerCount;