import { increment_value, decrement_value } from '../types'

const initialState = {
    count: 0
}

export const counter = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case increment_value:
            return {
                ...state, //individually ekta value change korbo tay pura state ta copy kore newa hoice
                count: state.count + action.payload
            }
        case decrement_value:
            return {
                ...state, //individually ekta value change korbo tay pura state ta copy kore newa hoice
                count: state.count - action.payload
            }
        default:
            return state
    }
}

// export const reducerName = (state = , action) => {
//     switch (action.type) {
//         case 'ACTION_TYPE':
//             return 
//         default:
//             return state
//     }
// }