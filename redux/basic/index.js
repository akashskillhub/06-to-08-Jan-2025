import { createStore } from "redux"

// reducer
const rootReducer = (state = { balance: 500 }, action) => {
    if (action.type === "widraw") {
        return {
            balance: state.balance - action.payload
        }
    }
    if (action.type === "deposit") {
        return {
            balance: state.balance + action.payload
        }
    }

    return state
}

// store
const store = createStore(rootReducer)

console.log(store.getState()) // 👈 get data from store
// action
store.dispatch({ type: "widraw", payload: 50 }) // 👈 this will call reducer
console.log(store.getState())

store.dispatch({ type: "deposit", payload: 1000 })
console.log(store.getState())
