import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product.api";


const reduxStore = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: def => [...def(), productApi.middleware]
})

export default reduxStore