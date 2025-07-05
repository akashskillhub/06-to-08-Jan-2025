import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/admin" }),
    tagTypes: ["admin"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/fetch",
                        method: "GET"
                    }
                },
                providesTags: ["admin"]
            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/create-todo",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            updateUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/update-todo/" + userData._tid,
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            deleteUser: builder.mutation({
                query: tid => {
                    return {
                        url: "/delete-todo/" + _tid,
                        method: "POST",
                        // body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            getViewer: builder.query({
                query: () => {
                    return {
                        url: "/view-users",
                        method: "GET"
                    }
                },
                providesTags: ["admin"]
            }),
            activeViewer: builder.mutation({
                query: userData => {
                    return {
                        url: "/activate-users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),
            deactivateViewer: builder.mutation({
                query: userData => {
                    return {
                        url: "/deactivate-users",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["admin"]
            }),

        }
    }
})

export const { useGetUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation,
    useGetViewerQuery,
    useActiveViewerMutation,
    useDeactivateViewerMutation } = adminApi
