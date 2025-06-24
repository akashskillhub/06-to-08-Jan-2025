import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";

import authSlice from "./slices/auth.slice"
const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware]
})

export default reduxStore