import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/admin",
        credentials: "include"
    }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            getTodo: builder.query({
                query: () => {
                    return {
                        url: "/read-todo",
                        method: "GET"
                    }
                },
                providesTags: ["admin"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/create-todo",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            updateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/update-todo/" + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            deleteTodo: builder.mutation({
                query: _id => {
                    return {
                        url: "/delete-todo/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["admin"]
            }),
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/view-users",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            activeUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/activate-user/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            deactivateUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/deactivate-user/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),

        }
    }
})

export const {
    useGetTodoQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,

    useGetUsersQuery,
    useActiveUserMutation,
    useDeactivateUserMutation
} = adminApi
