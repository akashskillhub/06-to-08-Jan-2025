import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { count: 50 },
    reducers: {
        inc: (state, { payload }) => {
            state.count++
        },
        dec: (state, { payload }) => {
            state.count--
        },
    },
})

export const { dec, inc } = counterSlice.actions
export default counterSlice.reducer