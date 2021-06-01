// import { createStore } from "redux";
// import rootReducer from './reducers'  //index.j likte hoi na bydefault thake

// export const store = createStore(
//     rootReducer
// )

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";  // this is Middleware which showing console in browser  
import { composeWithDevTools } from 'redux-devtools-extension'; //data gulu visually dkte hlp kore
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(
    reducers,
    {}, //initialState => ey object er itor sokon array,object,data thabe
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;


//store => short Keyword
// import { reducerName } from './reducer'
// import { createStore } from 'redux'

// const store = createStore(reducerName)

// export default store
