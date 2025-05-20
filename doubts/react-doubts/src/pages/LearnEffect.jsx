import React, { useEffect, useState } from 'react'

// render
// re render
const LearnEffect = () => {
    const [count, setCount] = useState(10)
    const [age, setAge] = useState(20)
    useEffect(() => {
        console.log("effect : mount + dep change")
        return () => {
            console.log("cleanup : unmount + dep change")
        }
    }, [count])
    return <>
        <div>LearnEffect</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <hr />
        <h1>{age}</h1>
        <button onClick={e => setAge(age + 1)}>+1 age</button >
    </>

}

export default LearnEffect