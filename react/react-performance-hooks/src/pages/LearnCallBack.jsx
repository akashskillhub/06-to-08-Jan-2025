import React, { useCallback, useEffect, useMemo, useState } from 'react'

const LearnCallBack = () => {
    const [count, setCount] = useState(0)


    //              👇 returns memoize / cache function
    const test = useCallback(() => {
        console.log("test function")
        return "dell"
    }, [])

    // console.log(test)


    //              👇 returns function's return memoize / cache value 
    const demo = useMemo(() => {
        console.log("test function")
        return "dell"
    }, [])
    console.log(demo);


    const handleSum = useMemo(() => {
        let sum = 0
        for (let i = 0; i < 10000000000; i++) {
            sum = sum + i
        }
        return sum
    }, [])


    return <>
        <div>LearnCallBack</div>
        <h1>{count}</h1>
        <h1>{handleSum}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
    </>

}

export default LearnCallBack