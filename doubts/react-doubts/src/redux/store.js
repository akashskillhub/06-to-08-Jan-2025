import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./count.slice"
import { productApi } from "./product.api";
import { employeeApi } from "./employee.api";

const reduxStore = configureStore({
    reducer: {
        counter: countSlice,
        [productApi.reducerPath]: productApi.reducer,
        [employeeApi.reducerPath]: employeeApi.reducer,
    },
    middleware: def => [...def(), productApi.middleware, employeeApi.middleware]
})

export default reduxStore