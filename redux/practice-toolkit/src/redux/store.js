import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./slices/todoSlice"
const reduxStore = configureStore({
    reducer: {
        kahipn: todoSlice
    },
})

export default reduxStore