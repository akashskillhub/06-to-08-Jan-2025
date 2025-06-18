import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            fetchTodos: builder.query({
                query: () => {
                    return {
                        url: "/todos",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation({
                query: userData => {
                    return {
                        url: "/create-todo",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            modifyTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/modify-todo/" + todoData.id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            removeTodo: builder.mutation({
                query: id => {
                    return {
                        url: "/remove-todo/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["todo"]
            }),

        }
    }
})

export const {
    useAddTodoMutation,
    useFetchTodosQuery,
    useModifyTodoMutation,
    useRemoveTodoMutation
} = todoApi
