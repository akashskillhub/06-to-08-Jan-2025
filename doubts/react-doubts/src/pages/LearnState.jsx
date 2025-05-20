import React, { useState } from 'react'

const LearnState = () => {
    const [user, setUser] = useState({ age: 20 })
    const [count, setCount] = useState(500)
    let x = 10
    const inc = () => {
        x++
        console.log(x)
        setUser({ age: user.age + 1 }) // setUser(21)

        setCount(count + 1) // async
        console.log(count)
    }
    return <>
        <h1>{user.age}</h1>
        <div>LearnState</div>
        <h1>{x}</h1>
        <h1>{count}</h1>
        <button onClick={inc}>+1</button>
    </>

}

export default LearnState