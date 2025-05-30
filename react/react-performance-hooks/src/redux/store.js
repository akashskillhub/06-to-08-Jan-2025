import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todoApi";
const reduxStore = configureStore({
    reducer: {
        articles: todoApi.reducer,
    },
    middleware: defaultMiddleware => [...defaultMiddleware(), todoApi.middleware]
})

export default reduxStore