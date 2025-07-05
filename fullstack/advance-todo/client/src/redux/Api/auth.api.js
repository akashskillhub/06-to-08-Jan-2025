import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/auth" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {

            adminregiater: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-register",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),
            adminlogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-login",
                        method: "POST",
                        body: userData
                    }
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
                invalidatesTags: ["auth"]
            }),

        }
    }
})

export const { useAdminregiaterMutation,
    useAdminloginMutation,
    useAdminlogoutMutation,
    useUserloginMutation,
    useUserlogoutMutation,
    useUserregisterMutation,

} = authApi
