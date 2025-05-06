import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, deleteBlog, getBlogs } from '../redux/blogActions'
import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'

const Blog = () => {
    const dispatch = useDispatch()
    //      👇 slice                             👇 store
    const { blogs } = useSelector(state => state.skillhub)

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
        onSubmit: (values, { resetForm }) => {
            dispatch(addBlog(values))
            dispatch(getBlogs())
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        dispatch(getBlogs())
    }, [])
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input className={handleClasses("title")} {...formik.getFieldProps("title")} placeholder='title' type="text" />
                <span className="invalid-feedback">{formik.errors.title}</span>
            </div>
            <div>
                <input className={handleClasses("hero")} {...formik.getFieldProps("hero")} placeholder='hero' type="text" />
                <span className="invalid-feedback">{formik.errors.hero}</span>
            </div>
            <div>
                <textarea className={handleClasses("desc")} {...formik.getFieldProps("desc")} placeholder='desc' ></textarea>
                <span className="invalid-feedback">{formik.errors.desc}</span>
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>hero</th>
                    <th>desc</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogs && blogs.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <img src={item.hero} height={100} alt="" />
                        </td>
                        <td>{item.desc}</td>
                        <td>
                            <button onClick={e => {
                                dispatch(deleteBlog(item.id))
                                dispatch(getBlogs())
                            }}>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Blog