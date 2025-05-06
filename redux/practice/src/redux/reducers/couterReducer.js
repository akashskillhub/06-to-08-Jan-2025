export const counterReducer = (state = { count: 10 }, { type, payload }) => {
    switch (type) {
        case "INC": return { count: state.count + payload }
        case "DEC": return { count: state.count - payload }
        default: return state
    }
}