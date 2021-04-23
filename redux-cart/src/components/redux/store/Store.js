import { createStore } from 'redux'
import cartReducer from '../CartReducer'


export const store = createStore(cartReducer)