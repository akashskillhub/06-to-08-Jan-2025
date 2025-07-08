import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
    }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {
            adminlogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("admin", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),
            adminlogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),
            userregister: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-register",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),
            userlogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),
            userlogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),

        }
    }
})

export const {
    useAdminloginMutation,
    useAdminlogoutMutation,
    useUserloginMutation,
    useUserlogoutMutation,
    useUserregisterMutation,

} = authApi
