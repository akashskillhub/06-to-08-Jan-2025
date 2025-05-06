import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todo.api";
import { noteApi } from "./test.api";


const reduxStore = configureStore({
    reducer: {
        skilLhub: todoApi.reducer,
        [noteApi.reducerPath]: noteApi.reducer

    },
    middleware: def => [...def(), todoApi.middleware, noteApi.middleware]
})

export default reduxStore