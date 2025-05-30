import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "articles",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/todos" }),
    tagTypes: ["kuchbhi"],
    endpoints: builder => {
        return {
            getTodos: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["kuchbhi"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["kuchbhi"]
            }),
            deleteTodo: builder.mutation({
                query: id => {
                    return {
                        url: `/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["kuchbhi"]
            }),
            updateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: `/${todoData.id}`,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["kuchbhi"]
            }),
        }
    }
})


export const {
    useAddTodoMutation,
    useGetTodosQuery,
    useDeleteTodoMutation,
    useUpdateTodoMutation
} = todoApi