import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../share/handleClasses'

const Todos = () => {
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
            resetForm()
        }
    })
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todos</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <select className={handleClasses(formik, "auther")}>
                                        <option selected>Choose User</option>
                                        <option value="1">John Doe</option>
                                        <option value="2">Ross Galler</option>
                                        <option value="3">Rachel Green</option>
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
                                    <select className={handleClasses(formik, "priority")}>
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
            </div>
        </div>
    </>
}

export default Todos