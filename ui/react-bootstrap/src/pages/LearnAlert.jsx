import React from 'react'
import { Alert } from 'react-bootstrap'

const LearnAlert = () => {
    const colors = ["primary", "secondary", "info", "success", "danger", "warning", "dark", "light"]
    return <>
        {
            colors.map(item => <Alert variant={item}>{item}</Alert>)
        }
    </>
}

export default LearnAlert