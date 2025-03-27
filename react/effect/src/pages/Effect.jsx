import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("effect mount")
        return () => {
            console.log("cleanup unmount")
        }
    }, [count])
    // 👆 dependacy array
    return <>
        <div>Effect</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>add</button>
        <button onClick={e => setCount(10)}>set 10</button>
    </>

}

export default Effect