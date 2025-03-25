import React, { useState } from 'react'

const PracticeState = () => {
    // re render
    // let n1, n2
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [sum, setSum] = useState(0)
    console.log("hello")

    return <>
        <input type="number" onChange={(e) => setN1(+e.target.value)} />
        <input type="number" onChange={(e) => setN2(+e.target.value)} />
        <hr />
        <h1>{sum}</h1>
        <button onClick={() => setSum(n1 + n2)}>+</button>
        <button onClick={() => setSum(n1 - n2)}>-</button>
    </>

}

export default PracticeState