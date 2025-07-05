import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/user" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            deleteUser: builder.mutation({
                query: _id => {
                    return {
                        url: "/" + _id,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
        }
    }
})
export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = userApi
