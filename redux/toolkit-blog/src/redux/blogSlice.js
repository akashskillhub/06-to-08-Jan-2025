import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogActions";

const blogSlice = createSlice({
    name: "blogSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(getBlogs.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getBlogs.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogs = payload
        })
        .addCase(getBlogs.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = blogSlice.actions
export default blogSlice.reducer