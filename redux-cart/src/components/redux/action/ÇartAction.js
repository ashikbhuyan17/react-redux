export const Add_TO_CART = 'Add_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


export const addToCart = id => {
    console.log(id);
    return { type: Add_TO_CART, id }
}                


export const removeFromCart = id => {
    return { type: REMOVE_FROM_CART, id }
}