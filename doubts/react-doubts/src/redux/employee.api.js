import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getEmployees: builder.query({
                query: () => {
                    return {
                        url: "/employees",
                        method: "GET"
                    }
                },
                providesTags: ["emp"]
            }),
            addEmployee: builder.mutation({
                query: employeeData => {
                    return {
                        url: "/employees",
                        method: "POST",
                        body: employeeData
                    }
                },
                invalidatesTags: ["emp"]
            }),
            deleteEmployee: builder.mutation({
                query: id => {
                    return {
                        url: "/employees/" + id,
                        method: "DELETE",
                        // body: employeeData
                    }
                },
                invalidatesTags: ["emp"]
            }),
            udpateEmployee: builder.mutation({
                query: employeeData => {
                    return {
                        url: "/employees/" + employeeData.id,
                        method: "PATCH",
                        body: employeeData
                    }
                },
                invalidatesTags: ["emp"]
            }),

        }
    }
})

export const {
    useGetEmployeesQuery,
    useAddEmployeeMutation,
    useUdpateEmployeeMutation,
    useDeleteEmployeeMutation,
} = employeeApi
