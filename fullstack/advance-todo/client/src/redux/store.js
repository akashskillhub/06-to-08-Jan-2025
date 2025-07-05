import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./Api/admin.api";
import { authApi } from "./Api/auth.api";
import { userApi } from "./Api/user.api";


const reduxStore = configureStore({
    reducer: {
        [adminApi.reducerPath]: adminApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer

    },
    middleware: def => [...def(), adminApi.middleware, authApi.middleware, userApi.middleware]
})

export default reduxStore