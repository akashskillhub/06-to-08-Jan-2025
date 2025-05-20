import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            getPublicProducts: builder.query({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET"
                    }
                },
            }),
            getPublicProductDetails: builder.query({
                query: arg => {
                    return {
                        url: "/products/" + arg,
                        method: "GET"
                    }
                },
            }),
            placeOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/orders",
                        method: "POST",
                        body: orderData
                    }
                },
            }),
        }
    }
})

export const {
    useGetPublicProductsQuery,
    useGetPublicProductDetailsQuery,
    usePlaceOrderMutation
} = publicApi
