import React from 'react'
import { Button } from 'react-bootstrap'

const LearnButton = () => {
    const colors = ["primary", "secondary", "info", "success", "danger", "warning", "dark", "light"]
    return <>
        {
            colors.map(item => <Button variant={item}>{item}</Button>)
        }
        <hr />
        {
            colors.map(item => <Button variant={`outline-${item}`}>{item}</Button>)
        }
    </>
}

export default LearnButton