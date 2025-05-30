import React, { useState } from 'react'

const Compo2 = () => {
    const [count, setCount] = useState(0)
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count === 5 ? {} : count + 1)}>+1</button>
        <div>Compo2</div>
    </>

}

export default Compo2