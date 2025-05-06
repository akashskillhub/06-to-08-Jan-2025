import { reduxStore } from "../store"

export const widrawMoney = (data) => {
    reduxStore.dispatch({ type: "WIDRAW", payload: data })
}
export const depositMoney = data => {
    reduxStore.dispatch({ type: "DEPOSIT", payload: data })
}
