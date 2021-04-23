import { Add_TO_CART, REMOVE_FROM_CART } from "./action/ÇartAction"

const initialState = {
    cart: [],
    products: [
        {
            name: "lenovo laptops ",
            id: 1
        },
        {
            name: "Asus laptops ",
            id: 2
        },
        {
            name: "Dell laptops ",
            id: 3
        },
        {
            name: "Hp laptops ",
            id: 4
        },
    ]
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_TO_CART:
            // return {
            //     cart: [...state.cart, action.id]            //return state
            // }
            const newId = action.id
            const newCart = [...state.cart, newId]
            return { ...state, cart: newCart }
        case REMOVE_FROM_CART:
            const id = action.id
            const remainingCart = state.cart.filter(item => item !== id)
            return { ...state, cart: remainingCart }
        default:
            return state
    }
}
export default cartReducer;