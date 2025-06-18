import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
    }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signin: builder.mutation({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: arg => {
                    console.log(arg.result);

                    localStorage.setItem("auth-user", JSON.stringify(arg.result))
                    return arg.result
                }
            }),
            signout: builder.mutation({
                query: userData => {
                    return {
                        url: "/signout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: arg => {
                    localStorage.removeItem("auth-user")
                    return arg.result
                }
            }),

        }
    }
})

export const { useSigninMutation, useSignupMutation, useSignoutMutation } = authApi
