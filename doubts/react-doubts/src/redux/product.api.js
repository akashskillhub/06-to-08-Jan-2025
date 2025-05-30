import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getProducts: builder.query({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET"
                    }
                },
                // providesTags: ["tagName"]
            }),
            addProducts: builder.mutation({
                query: userData => {
                    return {
                        url: "/products",
                        method: "POST",
                        body: userData
                    }
                },
                // invalidatesTags: ["tagName"]
            }),

        }
    }
})

export const { useAddProductsMutation, useGetProductsQuery } = productApi
