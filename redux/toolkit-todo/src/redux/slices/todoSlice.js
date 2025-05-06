import { createSlice } from "@reduxjs/toolkit";
import { getTodo } from "../actions/todoActions";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(getTodo.fulfilled, (state, { payload }) => {
            state.skillhub = payload
        })

})

export const { invalidate } = todoSlice.actions
export default todoSlice.reducer