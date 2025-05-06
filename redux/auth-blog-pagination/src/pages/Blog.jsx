import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../share/handleClasses'

const Blog = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            hero: "",
            desc: "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            hero: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            resetForm()
        }
    })



    return <div className="container">

        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Blog App</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card-body">
                            <div>
                                <input className={handleClasses(formik, "title")} {...formik.getFieldProps("title")} type="text" placeholder='Enter Title' />
                                <span className='invalid-feedback'>{formik.errors.title}</span>
                            </div>
                            <div>
                                <input className={handleClasses(formik, "hero")} {...formik.getFieldProps("hero")} type="text" placeholder='Enter Hero URL' />
                                <span className='invalid-feedback'>{formik.errors.hero}</span>
                            </div>
                            <div>
                                <textarea className={handleClasses(formik, "desc")} {...formik.getFieldProps("desc")} placeholder='Enter Description'></textarea>
                                <span className='invalid-feedback'>{formik.errors.desc}</span>
                            </div>
                            <button type='submit' className='btn btn-dark w-100'>Add Blog</button>
                        </div>
                    </form>
                </div>

                <table className='mt-5 table table-bordered'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>hero</th>
                            <th>desc</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Blog