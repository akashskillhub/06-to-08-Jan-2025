import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/auth" }),
    endpoints: (builder) => {
        return {
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            otp: builder.mutation({
                query: userData => {
                    return {
                        url: "/send-otp",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
            }),

            signout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout",
                        method: "POST",
                        body: userData
                    }
                }
            }),
        }
    }
})

export const {
    useSigninMutation,
    useSignoutMutation,
    useSignupMutation,
    useOtpMutation
} = authApi
