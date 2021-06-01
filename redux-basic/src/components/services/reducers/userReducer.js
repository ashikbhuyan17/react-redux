import { get_user_failed, get_user_success, user_request } from '../types'

const initialState = {
    loading: false,
    users: [],
    error: ""
}

export default function (state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case user_request:
            return {
                ...state,
                loading: true
            }
        case get_user_success:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case get_user_failed:
            return {
                ...state,
                loading: false,
                users: "",
                error: action.payload
            }
        default:
            return state
    }
}

