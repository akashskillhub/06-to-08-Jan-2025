import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "https://node-auth-rhtr.onrender.com/api/auth" }),
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
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
                transformResponse: data => {
                    localStorage.setItem("live-auth", JSON.stringify(data.result))
                    return data.result
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
                transformResponse: data => {
                    localStorage.removeItem("live-auth")
                    return data.result
                }
            }),

        }
    }
})

export const {
    useSigninMutation,
    useSignoutMutation,
    useSignupMutation
} = authApi
