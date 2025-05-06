import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"

// reducer
const rootReducer = (state = { balance: 500 }, action) => {
    if (action.type === "WIDRAW") {
        return { balance: state.balance - action.payload }
    }
    if (action.type === "DEPOSIT") {
        return { balance: state.balance + action.payload }
    }
    return state
}
// store
const x = combineReducers({ skillhub: rootReducer })
export const store = createStore(x, {}, composeWithDevTools(applyMiddleware(thunk)))
// action

export const widrawMoney = () => {
    store.dispatch({ type: "WIDRAW", payload: 50 })
}
export const depositMoney = () => {
    store.dispatch({ type: "DEPOSIT", payload: 500 })
}