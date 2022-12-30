import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import shopsReducer from "./shopsReducer";

let reducers = combineReducers({
    shopsPage: shopsReducer,
    profilePage: profileReducer
})


let store = legacy_createStore(reducers)