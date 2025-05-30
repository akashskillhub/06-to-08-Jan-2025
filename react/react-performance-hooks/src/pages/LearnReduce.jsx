import React, { useReducer } from 'react'


const counterReducer = (state, { type, payload }) => {
    switch (type) {
        case "INC": return { count: state.count + 1 }
        default: return state
    }
}
const LearnReduce = () => {
    // state        : Simple state                 | Less scalable       
    // useReducer   : Complex or multi-field state | More scalable
    const [{ count }, dispatch] = useReducer(counterReducer, { count: 100 })
    return <>
        <h1>{count}</h1>
        <button onClick={e => dispatch({ type: "INC" })}>inc</button>
        <div>LearnReduce</div>
    </>

}

export default LearnReduce