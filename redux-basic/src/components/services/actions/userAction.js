import { get_user_failed, get_user_success, user_request } from "../types";
import axios from "axios";

export const userList = async () => {
    return (dispatch) => {
        try {
            dispatch({
                type: user_request

            })
            const res = await.get('https://jsonplaceholder.typicode.com/posts')
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

