import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            getProduct: builder.query({
                query: ({ start, limit }) => {
                    return {
                        url: "/products",
                        method: "GET",
                        params: { _limit: limit, _start: start }
                    }
                },
                transformResponse: (arg, meta) => {
                    return {
                        result: arg,
                        total: meta.response.headers.get("X-Total-Count")
                    }
                },
                providesTags: ["product"]
            }),
            addProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/products",
                        method: "POST",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            deleteProduct: builder.mutation({
                query: (id) => {
                    return {
                        url: "/products/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["product"]
            }),
            updateProduct: builder.mutation({
                query: (productData) => {
                    return {
                        url: "/products/" + productData.id,
                        method: "PATCH",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),

        }
    }
})

export const {
    useAddProductMutation,
    useDeleteProductMutation,
    useGetProductQuery,
    useUpdateProductMutation
} = adminApi