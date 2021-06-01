// import { createStore } from "redux";
// import rootReducer from './reducers'  //index.j likte hoi na bydefault thake

// export const store = createStore(
//     rootReducer
// )

import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {}, //initialState => ey object er itor sokon array,object,data thabe
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


//store => short Keyword
// import { reducerName } from './reducer'
// import { createStore } from 'redux'

// const store = createStore(reducerName)

// export default store
