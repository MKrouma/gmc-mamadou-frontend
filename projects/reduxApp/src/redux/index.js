import { createStore } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./rootReducer"

// export const store = createStore(rootReducer)
export const store = configureStore({
    reducer : rootReducer
})