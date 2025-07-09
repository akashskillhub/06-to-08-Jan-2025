import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/user",
        credentials: "include"
    }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            viewTodo: builder.query({
                query: () => {
                    return {
                        url: "/todo",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            complateTodo: builder.mutation({
                query: userData => {
                    return {
                        url: "/complete-todo/" + userData._id,
                        method: "PUT",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
        }
    }
})

export const { useComplateTodoMutation, useViewTodoQuery } = userApi
