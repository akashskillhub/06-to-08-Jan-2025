import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const noteApi = createApi({
    reducerPath: "noteApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getNotes: builder.query({
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["note"]
            }),
            addNote: builder.mutation({
                query: noteData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: noteData
                    }
                },
                invalidatesTags: ["note"]
            }),

        }
    }
})

export const { useAddNoteMutation, useGetNotesQuery } = noteApi
