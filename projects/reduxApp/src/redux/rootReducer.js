import userReducer from "./reducers/userReducer"
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    users : userReducer,
})