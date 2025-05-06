import clsx from 'clsx'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { createTodo, deleteTodo, readTodo } from '../redux/actions/todoActions'
import { useEffect } from 'react'

const Todo = () => {
    //      👇 from slice                           👇 from store
    const { skillhub } = useSelector(state => state.kahipn)
    const dispatch = useDispatch()
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
            dispatch(createTodo(values))
            dispatch(readTodo())
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        dispatch(readTodo())
    }, [])
    return <>
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input className={handleClasses("task")} {...formik.getFieldProps("task")} type="text" placeholder='enter task' />
                    <span className="invalid-feedback">{formik.errors.task}</span>
                </div>
                <div>
                    <textarea className={handleClasses("desc")} {...formik.getFieldProps("desc")} placeholder='enter desc'></textarea>
                    <span className="invalid-feedback">{formik.errors.desc}</span>
                </div>
                <div>
                    <select className={handleClasses("priority")} {...formik.getFieldProps("priority")} >
                        <option value="">choose priority</option>
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                    </select>
                    <span className="invalid-feedback">{formik.errors.priority}</span>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>

            <table class="table table-dark table-striped table-hover">
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
                        skillhub && skillhub.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button className='btn btn-sm btn-warning me-2'>edit</button>
                                <button onClick={e => {
                                    dispatch(deleteTodo(item.id))
                                    dispatch(readTodo())
                                }} className='btn btn-sm btn-danger'>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    </>
}

export default Todo

// typeScript