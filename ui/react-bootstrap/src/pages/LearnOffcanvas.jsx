import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const LearnOffcanvas = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(true)}>click me</Button>
        <Offcanvas show={show} onHide={e => setShow(false)} placement='end'>
            <Offcanvas.Header closeButton>header</Offcanvas.Header>
            <Offcanvas.Body>body</Offcanvas.Body>
        </Offcanvas>
    </>
}

export default LearnOffcanvas