import React from 'react'

const useLog = (arg) => {
    return <pre>{JSON.stringify(arg, null, 2)}</pre>
}

export default useLog