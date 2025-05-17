import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => {
        return {
            loginAdmin: builder.query({
                query: userData => {
                    return {
                        url: "/admin",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("ADMIN", JSON.stringify(data[0]))
                    return data[0]
                }
            }),
            loginUser: builder.query({
                query: userData => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("USER", JSON.stringify(data[0]))
                    return data[0]
                }
            }),
            registerUser: builder.mutation({
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

export const { useLazyLoginAdminQuery, useLazyLoginUserQuery, useRegisterUserMutation } = authApi
