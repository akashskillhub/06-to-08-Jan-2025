import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("USER")),
        admin: JSON.parse(localStorage.getItem("ADMIN")),
    },
    reducers: {
        adminLogout: (state, { payload }) => {
            localStorage.removeItem("ADMIN")
            state.admin = null
        },
        userLogout: (state, { payload }) => {
            localStorage.removeItem("USER")
            state.user = null
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.loginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })

})

export const { adminLogout, userLogout } = authSlice.actions
export default authSlice.reducer