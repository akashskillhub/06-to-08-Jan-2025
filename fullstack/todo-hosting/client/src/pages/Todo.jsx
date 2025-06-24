import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

import { useFormik } from "formik"
import * as yup from "yup"
import clsx from "clsx"
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery } from '../redux/apis/todo.api'
import { useEffect } from 'react'
import { toast } from "react-toastify"
import Navbar from '../components/Navbar'
const Todo = () => {
    // CORS
    // cross
    // origin
    // resource
    // sharing
    const { data } = useGetTodosQuery()
    const [addTodo, { isSuccess }] = useAddTodoMutation()
    const [deleteTodo, { isSuccess: deleteSuccess }] = useDeleteTodoMutation()


    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            addTodo(values)
            resetForm()
        }
    })
    const handleClassess = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("toast create success")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isSuccess) {
            toast.success("toast create success")
        }
    }, [isSuccess])
    return <>
        <Navbar />
        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Header>Todo</Card.Header>
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        placeholder='Enter Task'
                                        {...formik.getFieldProps("task")}
                                        className={handleClassess("task")}
                                    />
                                    <Form.Control.Feedback type='invalid'>{formik.errors.task}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        placeholder='Enter Desc'
                                        {...formik.getFieldProps("desc")}
                                        className={handleClassess("desc")}
                                    />
                                    <Form.Control.Feedback type='invalid'>{formik.errors.desc}</Form.Control.Feedback>
                                </Form.Group>
                                <Button type='submit'>Add Todo</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={{ span: 6, offset: 3 }}>
                    <table class="table table-dark table-striped table-hover mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>task</th>
                                <th>desc</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.result.map(item => <tr>
                                    <td>{item._id}</td>
                                    <td>{item.task}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <Button onClick={e => deleteTodo(item._id)} variant='danger'>Remove</Button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>


        </Container>
    </>
}
export default Todo