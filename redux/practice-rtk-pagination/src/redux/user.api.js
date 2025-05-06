import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: (arg) => {
                    return {
                        url: "/users",
                        method: "GET",
                        params: { _limit: arg.limit, _start: arg.start }
                    }
                },
                providesTags: ["user"]
            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            deleteUser: builder.mutation({
                query: id => {
                    return {
                        url: "/users/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["user"]
            }),

        }
    }
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation
} = userApi
