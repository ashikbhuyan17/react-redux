import { get_user_failed, get_user_success, user_request } from "../types";
import axios from "axios";

export const userList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: user_request

            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res.data);
            dispatch({
                type: get_user_success,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: get_user_failed,
                payload: error.message
            })
        }
    }
}

