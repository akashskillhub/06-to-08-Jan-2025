import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "countSlice",
    initialState: { count: 50 },
    reducers: {
        inc: (state, action) => {
            state.count = state.count + 1
        },
        dec: (state, action) => {
            state.count = state.count - 1
        },
    }
})
export const { dec, inc } = countSlice.actions
export default countSlice.reducer
