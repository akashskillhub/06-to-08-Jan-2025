import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../Api/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("admin")),
        user: JSON.parse(localStorage.getItem("user")),
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.adminlogin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.adminlogout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })


        .addMatcher(authApi.endpoints.userlogin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })
        .addMatcher(authApi.endpoints.userlogout.matchFulfilled, (state, { payload }) => {
            state.user = null
        })

})

export const { invalidate } = authSlice.actions
export default authSlice.reducer