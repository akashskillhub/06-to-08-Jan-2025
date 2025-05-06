import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
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
            await axios.post("http://localhost:5000/articles", values)
            getAllBlogs()
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const getAllBlogs = async () => {
        const { data } = await axios.get("http://localhost:5000/articles")
        setBlogs(data)
    }

    const handleDelete = async (id) => {
        // url+id
        await axios.delete("http://localhost:5000/articles/" + id)
        getAllBlogs()

    }

    useEffect(() => {
        getAllBlogs()
    }, [])
    return <div className="container">
        {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}

        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Blog App</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card-body">
                            <div>
                                <input className={handleClasses("title")} {...formik.getFieldProps("title")} type="text" placeholder='Enter Title' />
                                <span className='invalid-feedback'>{formik.errors.title}</span>
                            </div>
                            <div>
                                <input className={handleClasses("hero")} {...formik.getFieldProps("hero")} type="text" placeholder='Enter Hero URL' />
                                <span className='invalid-feedback'>{formik.errors.hero}</span>
                            </div>
                            <div>
                                <textarea className={handleClasses("desc")} {...formik.getFieldProps("desc")} placeholder='Enter Description'></textarea>
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
                        {
                            blogs.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td> <img src={item.hero} height={50} alt={item.hero} /> </td>
                                <td>{item.desc}</td>
                                <td>
                                    <button
                                        onClick={e => handleDelete(item.id)}
                                        className='btn btn-outline-danger btn-sm'>remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Blog