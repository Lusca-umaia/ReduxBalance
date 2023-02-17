import { createStore, combineReducers } from "redux";
import balanceReducer from "./balance/reducer";

const reducers = combineReducers({
    balance: balanceReducer
})


const store = createStore(reducers)

export default store