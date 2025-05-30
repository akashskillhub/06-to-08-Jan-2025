import React, { memo } from 'react'

const Test = ({ data }) => {
    console.log("test compo")
    return (
        <div>Test</div>
    )
}

export default memo(Test)