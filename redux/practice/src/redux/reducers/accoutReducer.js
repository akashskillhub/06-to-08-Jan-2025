export const accountReducer = (state = { balance: 1000 }, action) => {
    switch (action.type) {
        case "WIDRAW": return { balance: state.balance - action.payload }
        case "DEPOSIT": return { balance: state.balance + action.payload }
        default: return state
    }
}