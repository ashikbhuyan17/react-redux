// multiple reducer and action takte pare tay eygula ke combine korthe hobe 

import { combineReducers } from 'redux'
import { counter } from './counterReducer'

export default combineReducers(
    {
        counter
    }
)
