import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => {
        return {
            signin: builder.query({
                query: arg => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: arg
                    }
                },
            }),
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
            }),
        }
    }
})

export const { useSigninQuery, useLazySigninQuery, useSignupMutation } = authApi
