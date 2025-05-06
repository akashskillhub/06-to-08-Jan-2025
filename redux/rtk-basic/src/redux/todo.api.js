import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "skillhub",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: builder => {
        return {
            getTodos: builder.query({
                providesTags: ["kahipn"],
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET",
                    }
                }
            }),
            addTodo: builder.mutation({
                invalidatesTags: ["kahipn"],
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: todoData
                    }
                }
            }),
            deleteTodo: builder.mutation({
                invalidatesTags: ["kahipn"],
                query: id => {
                    return {
                        url: "/notes/" + id,
                        method: "DELETE",
                        // body: todoData
                    }
                }
            })
        }
    }
})
export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useDeleteTodoMutation
} = todoApi

