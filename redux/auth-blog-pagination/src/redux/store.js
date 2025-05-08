import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

import authSlice from "./auth.slice"
import { blogApi } from "./blog.api";
const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        skillhub: authSlice
    },
    middleware: def => [...def(), authApi.middleware, blogApi.middleware]
})

export default reduxStore