import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddTodoMutation } from '../redux/todoApi'
import { useState } from 'react'

const TodoForm = () => {
    // primitive            number string boolean undefined
    // non primitive        function array objects
    const obj1 = {}
    const [ob, setOb] = useState(obj1)
    console.log(ob === obj1)


    const [addTodo] = useAddTodoMutation()
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
            addTodo(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    return <div className="card">
        <div className="card-header">Todo Form</div>
        <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input {...formik.getFieldProps("task")} type="text" placeholder='task' className={handleClasses("task")} />
                    <span className="invalid-feedback">{formik.errors.task}</span>
                </div>
                <div>
                    <input {...formik.getFieldProps("desc")} type="text" placeholder='desc' className={handleClasses("desc")} />
                    <span className="invalid-feedback">{formik.errors.desc}</span>
                </div>
                <div>
                    <select {...formik.getFieldProps("priority")} className={handleClasses("priority")}>
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                    </select>
                    <span className="invalid-feedback">{formik.errors.priority}</span>
                </div>
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>
        </div>
    </div>
}

export default TodoForm