import React, { useState } from 'react'

const LearnState = () => {
    let x = 10
    const [count, setCount] = useState(10)
    return <>
        <div>LearnState</div>
        <h1>{x}</h1>
        <h1>{count}</h1>
        <button onClick={() => {
            x++
            console.log(x)
        }}>+1</button>

        <button onClick={() => setCount(count + 1)}>update</button>

        <button onClick={() => setCount(count - 1)}>-1</button>
    </>
}

export default LearnState