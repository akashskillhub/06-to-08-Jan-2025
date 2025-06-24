import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from "./note.api";


const reduxStore = configureStore({
    reducer: {
        [noteApi.reducerPath]: noteApi.reducer,
    },
    middleware: def => [...def(), noteApi.middleware]
})

export default reduxStore