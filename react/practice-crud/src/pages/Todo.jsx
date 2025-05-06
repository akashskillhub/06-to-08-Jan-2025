import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

const Todo = () => {
    const API = axios.create({ baseURL: "http://localhost:5000/notes" })
    const [allTodos, setAllTodos] = useState([])

    const createTodo = async () => {
        await API.post("/", { ...formik.values, complete: false })
        readTodo()
    }
    const readTodo = async () => {
        const { data } = await API.get("/")
        setAllTodos(data)
    }
    const updateTodo = async item => {
        await API.patch("/" + item.id, { ...item, complete: true })
        readTodo()
    }
    const deleteTodo = async id => {
        await API.delete("/" + id)
        readTodo()
    }


    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createTodo()
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        readTodo()
    }, [])
    return <>
        <Center>
            <form onSubmit={formik.handleSubmit}>
                <input className={handleClasses("task")} {...formik.getFieldProps("task")} type="text" placeholder='task' />
                <textarea className={handleClasses("desc")} {...formik.getFieldProps("desc")} placeholder='desc'></textarea>
                <select
                    className={handleClasses("priority")}
                    {...formik.getFieldProps("priority")}>
                    <option value="">Choose Priority</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <button type='submit' className='btn btn-dark'>Add</button>
            </form>
        </Center>

        <div className="container mt-5">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>task</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>complete</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTodos.map(item => <tr className={item.complete ? "table-success" : "table-danger"}>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{item.complete ? "Yes" : ""}</td>
                            <td>
                                <button onClick={e => updateTodo(item)} className='mx-2 btn btn-outline-warning'>complete</button>
                                <button onClick={e => deleteTodo(item.id)} className='mx-2 btn btn-outline-danger'>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Todo

const Center = ({ children }) => {
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Todo App</div>
                    <div class="card-body"> {children}</div>
                </div>
            </div>
        </div>
    </div>
}