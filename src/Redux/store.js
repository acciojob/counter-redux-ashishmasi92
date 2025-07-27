import {createStore,combineReducers} from "redux"

import counterReducer from "./reducer/countReducer.js"


const store = createStore(counterReducer)

export default store