import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const noteApi = createApi({
    reducerPath: "noteApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/notes`,
        credentials: "include"
    }),
    tagTypes: ["note"],
    endpoints: (builder) => {
        return {
            getNotes: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["note"]
            }),
            createNote: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["note"]
            }),
            modifyNote: builder.mutation({
                query: noteData => {
                    return {
                        url: "/" + noteData._id,
                        method: "PUT",
                        body: noteData
                    }
                },
                invalidatesTags: ["note"]
            }),
            removeNote: builder.mutation({
                query: _id => {
                    return {
                        url: "/" + _id,
                        method: "DELETE",
                        // body: noteData
                    }
                },
                invalidatesTags: ["note"]
            }),

        }
    }
})

export const {
    useCreateNoteMutation,
    useGetNotesQuery,
    useModifyNoteMutation,
    useRemoveNoteMutation
} = noteApi
