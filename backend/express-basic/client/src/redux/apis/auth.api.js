import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            login: builder.mutation({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            logout: builder.mutation({
                query: userData => {
                    return {
                        url: "/signout",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation
} = authApi
