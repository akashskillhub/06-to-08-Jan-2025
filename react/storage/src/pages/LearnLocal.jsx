import React from 'react'

const LearnLocal = () => {
    const x = [{ name: "john", age: 20 }]
    const add = () => {
        localStorage.setItem("user", JSON.stringify(x))
    }

    const get = () => {
        const result = localStorage.getItem("user")
        console.log(result)
        console.log(JSON.parse(result))
    }

    return <>
        <button onClick={add}>add</button>
        <button onClick={get}>get</button>
    </>
}

export default LearnLocal