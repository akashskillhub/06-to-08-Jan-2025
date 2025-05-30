import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
    name: "couterSlice",
    initialState: { count: 0 },
    reducers: {
        demo: (state, { payload }) => {
            state.count = payload
        },
        inc: (state, { payload }) => {
            state.count++
        },
        dec: (state, { payload }) => {
            state.count--
        },
    },

})

export const { demo, dec, inc } = couterSlice.actions
export default couterSlice.reducer