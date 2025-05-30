import React from 'react'
import useLog from '../hook/useLog'

const LearnCustomHook = () => {
    const obj = { name: "ross" }
    const str = useLog(obj)
    return <>
        {str}
        <div>LearnCustomHook</div>
    </>

}

export default LearnCustomHook

// HOOK RULE
// LAZY LOADING
// ERROR BOUNDARY