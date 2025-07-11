import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const LearnModal = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(true)}>Click me</Button>
        <Modal show={show} onHide={e => setShow(false)}>
            <Modal.Header closeButton>header</Modal.Header>
            <Modal.Body>body</Modal.Body>
            <Modal.Footer>footer</Modal.Footer>
        </Modal>
    </>
}

export default LearnModal