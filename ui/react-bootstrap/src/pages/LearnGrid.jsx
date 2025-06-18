import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'

const LearnGrid = () => {
    return <>
        <Container>
            <Row>
                <Col sm={12} md={4} lg={12}> <Alert>Primary</Alert> </Col>
                <Col sm={4} md={4} lg={6}> <Alert variant='danger'>danger</Alert> </Col>
                <Col sm={4} md={4} lg={6}> <Alert variant='info'>info</Alert> </Col>
                <Col sm={4} md={12} lg={12}> <Alert variant='success'>success</Alert> </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>Body</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}

export default LearnGrid