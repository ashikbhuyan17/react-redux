import { increment_value, decrement_value } from '../types'

//reducer function argument akare e amra je action gula paye thaki ta ta action theke amra return kory and http request o 

export const increment = (a) => {
    return {
        type: increment_value,
        payload: a

    }
}
export const decrement = (a) => {
    return {
        type: decrement_value,
        payload: a

    }
}

// rac => short Keyword
// export const actionCreator = (payload) => ({
//     type: actionType,
//     payload
// })