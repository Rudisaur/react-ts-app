const SET_MY_SHOPS = "SET-MY-SHOPS"
const CREATE_SHOP = "CREATE-SHOP"
const LET_CREATE_SHOP = "LET-CREATE-SHOP"
const REDACT_SHOP = "REDACT-SHOP"
const setMyShopsAC = () => ({})

let initialState = {
    shops: [],
    myShops: [],
    trackedShops: []
}

let shopsReducer = (state = initialState, action: any) => {
    switch(action.type){
    case (SET_MY_SHOPS):
        return state
    case (CREATE_SHOP):
        return state
    case (LET_CREATE_SHOP):
        return state
    case(REDACT_SHOP):
        return state
    default:
        return state
}
}

export default shopsReducer