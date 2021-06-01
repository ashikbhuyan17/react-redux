// multiple reducer and action takte pare tay eygula ke combine korthe hobe 

import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import userReducer from './userReducer';

export default combineReducers(
    {
        counterReducer,
        userReducer
    }
)
