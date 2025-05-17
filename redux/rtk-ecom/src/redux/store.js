import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";

import authSlice from "./slices/auth.slice"
import publicSlice from "./slices/public.slice"
import { adminApi } from "./apis/admin.api";
import { publicApi } from "./apis/public.api";
const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        auth: authSlice,
        public: publicSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        adminApi.middleware,
        publicApi.middleware,
    ]
})

export default reduxStore