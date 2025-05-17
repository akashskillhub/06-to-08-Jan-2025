import { createSlice } from "@reduxjs/toolkit";

const publicSlice = createSlice({
    name: "publicSlice",
    initialState: {
        cart: JSON.parse(localStorage.getItem("CART"))
            ? JSON.parse(localStorage.getItem("CART"))
            : []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const result = state.cart.find(item => item.id === payload.id)
            if (!result) {
                state.cart = [...state.cart, { ...payload, qty: 1 }]
                localStorage.setItem("CART", JSON.stringify(state.cart))
            }
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item.id !== payload)
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        emptyCart: (state, { payload }) => {
            state.cart = []
            localStorage.removeItem("CART")
        },
        incQty: (state, { payload }) => {
            const result = state.cart.findIndex(item => item.id === payload)
            state.cart[result].qty++
        },
        decQty: (state, { payload }) => {
            const result = state.cart.findIndex(item => item.id === payload)
            if (state.cart[result].qty > 1) {
                state.cart[result].qty--
            }
        },
    },
    extraReducers: builder => builder
})

export const {
    addToCart,
    removeFromCart,
    emptyCart,
    decQty,
    incQty
} = publicSlice.actions
export default publicSlice.reducer