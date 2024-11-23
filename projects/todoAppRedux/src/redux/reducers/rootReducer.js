import taskReducer from "./taskReducer"
import arrowReducer from "./arrowReducer"
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    tasks : taskReducer,
    arrow : arrowReducer
})