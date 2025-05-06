import { createSlice } from "@reduxjs/toolkit";
import { readTodo } from "../actions/todoActions";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(readTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(readTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.skillhub = payload
        })
        .addCase(readTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = todoSlice.actions
export default todoSlice.reducer