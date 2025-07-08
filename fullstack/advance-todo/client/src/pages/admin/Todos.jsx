import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../share/handleClasses'
import { useAddTodoMutation, useGetTodoQuery, useGetUsersQuery } from '../../redux/Api/admin.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Loading from '../../share/Loading'

const Todos = () => {
    const { data } = useGetUsersQuery()
    const { data: notes, } = useGetTodoQuery()
    const [addTodo, { isSuccess: addSuccess, isLoading: addIsLoading }] = useAddTodoMutation()
    const formik = useFormik({
        initialValues: {
            auther: "",
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            auther: yup.string().required(),
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            addTodo(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (addSuccess) {
            toast.success("todo create success")
        }
    }, [addSuccess])

    if (addIsLoading) {
        return <Loading />
    }
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todos</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <select {...formik.getFieldProps("auther")} className={handleClasses(formik, "auther")}>
                                        <option selected>Choose User</option>
                                        {
                                            data && data.result
                                                .filter(item => item.active)
                                                .map(item => <option value={item._id}>
                                                    {item.name}
                                                </option>)
                                        }
                                    </select>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className={handleClasses(formik, "task")}
                                        {...formik.getFieldProps("task")}
                                    />
                                    <span className="invalid-feedback">{formik.errors.task}</span>
                                </div>
                                <div>
                                    <textarea
                                        className={handleClasses(formik, "desc")}
                                        {...formik.getFieldProps("desc")}
                                    > </textarea>
                                    <span className="invalid-feedback">{formik.errors.desc}</span>
                                </div>

                                <div>
                                    <select {...formik.getFieldProps("priority")} className={handleClasses(formik, "priority")}>
                                        <option selected>Choose Priority</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                    <span className="invalid-feedback">{formik.errors.priority}</span>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 btn-lg">Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>

                {
                    notes && <table class="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>auther</th>
                                <th>task</th>
                                <th>desc</th>
                                <th>priority</th>
                                <th>complete</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                notes.result.map(item => <tr key={item._id}>
                                    <td>{item.auther}</td>
                                    <td>{item.task}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.complete ? "Complete" : "Pending"}</td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-outline-warning me-2">edit</button>
                                        <button type="button" class="btn btn-sm btn-outline-danger">remove</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    </>
}

export default Todos