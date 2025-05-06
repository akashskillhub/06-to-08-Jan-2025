import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice"
import todoSlice from "./slices/todoSlice"
const reduxStore = configureStore({
    reducer: {
        kahipn: counterSlice,
        allTodos: todoSlice
    },
})

export default reduxStore

/*
    old             100
    toolkit         70
    rtk             20
*/