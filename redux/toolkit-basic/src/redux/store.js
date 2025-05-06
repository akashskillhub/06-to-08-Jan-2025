import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice"
export const reduxStore = configureStore({
    reducer: {
        counter: countSlice
    }
})