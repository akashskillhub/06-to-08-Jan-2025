import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const { user } = useSelector(state => state.skillhub)
    if (user) {
        return children
    } else {
        return <Navigate to="/login" />
    }


}

export default Protected