import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query({
                query: ({ limit, start }) => {
                    return {
                        url: "/blogs",
                        method: "GET",
                        params: { _limit: limit, _start: start }
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/blogs",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation({
                query: id => {
                    return {
                        url: "/blogs/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/blogs/" + blogData.id,
                        method: "PATCH",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const {
    useAddBlogMutation,
    useDeleteBlogMutation,
    useGetBlogsQuery,
    useUpdateBlogMutation
} = blogApi
