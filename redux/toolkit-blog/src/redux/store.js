import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice"
const reduxStore = configureStore({
    reducer: {
        skillhub: blogSlice
    },
})

export default reduxStore