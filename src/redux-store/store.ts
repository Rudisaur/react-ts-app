import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import shopsReducer from "./shopsReducer";

let reducers = combineReducers({
    shopsPage: shopsReducer,
    profilePage: profileReducer
})


let store = legacy_createStore(reducers)
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export default store