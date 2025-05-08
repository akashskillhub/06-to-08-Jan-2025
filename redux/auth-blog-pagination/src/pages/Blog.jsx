import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../share/handleClasses'
import { useAddBlogMutation, useDeleteBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from '../redux/blog.api'
import { useState } from 'react'

const Blog = () => {
    const [limit, setLimit] = useState(2)
    const [start, setStart] = useState(0)
    const [selectedBlog, setSelectedBlog] = useState()
    const { data } = useGetBlogsQuery({ limit, start })
    const [createBlog] = useAddBlogMutation()
    const [modifyBlog] = useUpdateBlogMutation()
    const [removeBlog] = useDeleteBlogMutation()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: selectedBlog ? selectedBlog.title : "",
            hero: selectedBlog ? selectedBlog.hero : "",
            desc: selectedBlog ? selectedBlog.desc : "",
        },
        validationSchema: yup.object({
            title: yup.string().required(),
            hero: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            if (selectedBlog) {
                modifyBlog({ ...values, id: selectedBlog.id })
                setSelectedBlog(null)
            } else {
                createBlog(values)
            }
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
                            {
                                selectedBlog
                                    ? <>
                                        <button type='submit' className='btn btn-warning w-100'>Update Blog</button>
                                        <button onClick={e => setSelectedBlog(null)} type='button' className='btn btn-outline-primary w-100 mt-2'>Cancel</button>
                                    </>
                                    : <button type='submit' className='btn btn-dark w-100'>Add Blog</button>
                            }

                        </div>
                    </form>
                </div>

                <select class="form-select mt-3" value={limit} onChange={e => setLimit(e.target.value)}>
                    <option selected>Choose Limit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                </select>

                {
                    [...Array(Math.ceil(5 / limit)).keys()].map(item => <button type="button" onClick={e => setStart(item * limit)} class="btn btn-primary me-2 my-2">{item}</button>)
                }

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
                            data && data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td> <img src={item.hero} height={50} alt="" /> </td>
                                <td>{item.desc}</td>
                                <td>
                                    <button onClick={e => setSelectedBlog(item)} type="button" class="btn btn-sm btn-outline-warning">Edit</button>
                                    <button onClick={e => removeBlog(item.id)} type="button" class="btn btn-sm btn-outline-danger">Remove</button>
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