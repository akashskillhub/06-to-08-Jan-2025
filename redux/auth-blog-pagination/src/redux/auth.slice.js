import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { user: JSON.parse(localStorage.getItem("AUTH")) },
    reducers: {
        logout: (state, { payload }) => {
            localStorage.removeItem("AUTH")
            state.user = null
        }
    },
    extraReducers: builder => builder
        // 👇redux Toolkit
        // .addCase(actionName.pending, (state, { payload }) => {
        //     state.loading = true
        // })

        //👇rtk
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })

})

export const { logout } = authSlice.actions
export default authSlice.reducer