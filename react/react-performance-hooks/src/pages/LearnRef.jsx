import React, { useEffect, useRef } from 'react'

const LearnRef = () => {
    console.log("ref")
    const x = useRef(null)
    const y = useRef(null)
    useEffect(() => {
        console.log(y.current)
    }, [])

    return <>
        <input type="text" ref={x} />
        <button onClick={e => console.log(x.current.value)}>click me</button>
        <hr />

        <input type="file" ref={y} style={{ display: "none" }} />
        <div
            onClick={e => y.current.click()}
            style={{
                height: 400,
                border: "2px dashed gray",
                margin: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <span>please select file</span>
        </div>
    </>
}

export default LearnRef