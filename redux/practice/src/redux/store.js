import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import { accountReducer } from "./reducers/accoutReducer"
import { counterReducer } from "./reducers/couterReducer"


const rootReducer = combineReducers({
    account: accountReducer,
    counter: counterReducer
})

export const reduxStore = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))



