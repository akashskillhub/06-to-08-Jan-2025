import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../utils/handleClasses'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import { Auth } from '../App'

const Dashboarrd = () => {
    const { user } = useContext(Auth)
    const [todos, setTodos] = useState()
    const getTodos = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/notes", {
                params: {
                    auther: user.id
                }
            })
            setTodos(data)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteTodo = async (id) => {
        try {
            await axios.delete("http://localhost:5000/notes/" + id)
            toast.success("todo delete success")
            getTodos()
        } catch (error) {
            console.log(error)
        }
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
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post("http://localhost:5000/notes", { ...values, auther: user.id })
                toast.success("todo create success")
                getTodos()
                resetForm()
            } catch (error) {
                toast.error(error.message || "unable to create todo")
            }
        }
    })

    const handlePriority = key => clsx({
        "table-danger": key === "high",
        "table-warning": key === "medium",
        "table-success": key === "low",
    })

    useEffect(() => {
        getTodos()
    }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todo App</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input
                                        className={handleClasses(formik, "task")}
                                        {...formik.getFieldProps("task")}
                                        type="text" placeholder='task' />
                                    <span className="invalid-feedback">{formik.errors.task}</span>
                                </div>
                                <div>
                                    <textarea
                                        className={handleClasses(formik, "desc")}
                                        {...formik.getFieldProps("desc")}
                                        placeholder='desc'></textarea>
                                    <span className="invalid-feedback">{formik.errors.desc}</span>
                                </div>
                                <div>
                                    <select
                                        className={handleClasses(formik, "priority")}
                                        {...formik.getFieldProps("priority")}>
                                        <option value="">choose priority</option>
                                        <option value="high">high</option>
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                    </select>
                                    <span className="invalid-feedback">{formik.errors.priority}</span>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Add</button>
                            </form>
                        </div>
                    </div>
                    {
                        todos
                            ? <table className='table table-bordered my-3'>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>task</th>
                                        <th>desc</th>
                                        <th>priority</th>
                                        <th>actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.map(item => <tr className={handlePriority(item.priority)}>
                                            <td>{item.id}</td>
                                            <td>{item.task}</td>
                                            <td>{item.desc}</td>
                                            <td>{item.priority}</td>
                                            <td>
                                                <button
                                                    onClick={e => deleteTodo(item.id)}
                                                    type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                            : <h1>No Todos Found</h1>
                    }
                </div>
            </div>
        </div>
    </>
}

export default Dashboarrd