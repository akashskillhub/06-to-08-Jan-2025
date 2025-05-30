import React, { useState } from 'react'
import Test from './Test'

const LearnMemo = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("dark")
    return <>
        <h1>theme {theme}</h1>

        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <button onClick={e => setTheme(theme === "dark" ? "light" : "dark")}>toggle</button>
        <div>LearnMemo</div>
        <hr />
        <Test data={theme} />
    </>

}

export default LearnMemo