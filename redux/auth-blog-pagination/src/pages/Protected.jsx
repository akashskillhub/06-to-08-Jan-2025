import React from 'react'
import { useSelector } from 'react-redux'

const Protected = ({ children }) => {

    const { user } = useSelector(state => state.skillhub)
    if (user) {
        return children
    } else {
        return <h1>Please Login</h1>
    }


}

export default Protected