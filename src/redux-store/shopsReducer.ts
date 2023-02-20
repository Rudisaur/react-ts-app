const SET_MY_SHOPS = "SET-MY-SHOPS"
const CREATE_SHOP = "CREATE-SHOP"
const LET_CREATE_SHOP = "LET-CREATE-SHOP"
const REDACT_SHOP = "REDACT-SHOP"
const SET_SEARCHED_SHOPS ="SET-SEARCHED-SHOPS"
const SET_TRACKED_SHOPS = "SET-TRACKED-SHOPS"
const SET_CREATE_SHOP_EXAMLES = "SET-CREATE-SHOP-EXAMLES"
const setMyShopsAC = () => ({})
export let setCreateShopExamplesAC = (createShopExamples: any) => {return {type: SET_CREATE_SHOP_EXAMLES, createShopExamples: createShopExamples}}
let initialState = {
    shops: [],
    myShops: [],
    trackedShops: [],
    createShopData: {nameOfShop:'', chosenCategory: '',chosenTypeOfProduct: '', chosenTypeOfService: '', chosenCity: ''},
    createShopExamples: {
        categories: [{category: 'Магазин', id: 1}, {category: 'Сервис', id: 2}],
        typesOfProduct: [
            {typeOfProduct: 'еда и напитки', id: 1}, 
            {typeOfProduct: 'бытовая химия', id: 2}, 
            {typeOfProduct: 'запчасти', id: 3}, 
            {typeOfProduct: 'косметика', id: 4},
            {typeOfProduct: 'компьютерная техника', id: 5}],
        typesOfService: [
            {typeOfServise: 'ремонт авто', id: 1},
            {typeOfServise: 'кафе/ресторан', id: 2},
            {typeOfServise: 'развлечения', id: 3},
            {typeOfServise: 'стритфуд', id: 4},
            {typeOfServise: 'ремонт компьютерной техники', id: 5},],
        cities: [
            {city: 'Кокшетау', id: 1},
            {city: 'Алматы', id: 2},
            {city: 'Астана', id: 3},
            {city: 'Петропавловск', id: 4},
            {city: 'Щучинск', id: 5},
            {city: 'Павлодар', id: 6},
            {city: 'Караганда', id: 7},
            {city: 'Боровое', id: 8},
            {city: 'Шымкент', id: 9},]
    }
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
    case(SET_SEARCHED_SHOPS):
        return state
    case(SET_TRACKED_SHOPS):
        return state
    case(SET_CREATE_SHOP_EXAMLES):
        state = {...state, createShopExamples: action.createShopExamples}
        return state
    default:
        return state
}
}

export default shopsReducer