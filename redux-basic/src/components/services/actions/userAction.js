import { get_user_failed, get_user_success, user_request } from "../types";
import axios from "axios";

export const userList = () => {
    return async (dispatch, getState) => {          // thunk middleware jonno return e ekta function paiye jai 
        console.log(getState);
        try {
            dispatch({
                type: user_request

            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res.data);
            dispatch({
                type: get_user_success,
                payload: res.data.slice(0, 10)
            })
        } catch (error) {
            dispatch({
                type: get_user_failed,
                payload: error.message
            })
        }
    }
}

