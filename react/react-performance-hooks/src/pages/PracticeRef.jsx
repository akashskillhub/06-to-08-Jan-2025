import React, { useRef } from 'react'

const PracticeRef = () => {
    const divRef = useRef(null)
    const inputRef = useRef(null)
    console.log("render")
    return <>
        <div ref={divRef}>PracticeRef</div>

        <input type="text" ref={inputRef} />
        <button onClick={e => console.log(inputRef.current.value)}>show</button>
    </>
}

export default PracticeRef