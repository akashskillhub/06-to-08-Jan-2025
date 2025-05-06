import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddUserMutation, useGetUsersQuery } from '../redux/user.api'
import { useState } from 'react'

const Users = () => {
    const [limit, setLimit] = useState(2)
    const [start, setStart] = useState(0)
    const [createUser] = useAddUserMutation()
    const { data } = useGetUsersQuery({ limit, start })
    const formik = useFormik({
        initialValues: {
            name: "",
            hero: "",
            role: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            hero: yup.string().required(),
            role: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            createUser(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    // console.log(Array(10 / limit)) // itrable
    // console.log(Array(10 / limit).keys()) // itrable
    // console.log([...Array(10 / limit).keys()])

    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">Users</div>
                    <div class="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input placeholder='enter name' type="text" className={handleClasses("name")} {...formik.getFieldProps("name")} />
                                <span className="invalid-feedback">{formik.errors.name}</span>
                            </div>
                            <div>
                                <input placeholder='enter hero image url' type="text" className={handleClasses("hero")} {...formik.getFieldProps("hero")} />
                                <span className="invalid-feedback">{formik.errors.hero}</span>
                            </div>
                            <div>
                                <select className={handleClasses("role")} {...formik.getFieldProps("role")}>
                                    <option selected>Choose Role </option>
                                    <option value="frontend developer">frontend developer</option>
                                    <option value="backend developer">backend developer</option>
                                    <option value="mobile app develper">mobile app develper</option>
                                </select>
                                <span className="invalid-feedback">{formik.errors.role}</span>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Add</button>
                        </form>
                    </div>
                </div>

                <select class="form-select my-2" value={limit} onChange={e => setLimit(e.target.value)}>
                    <option selected>choose limit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>

                <button onClick={e => setStart(start - limit)}>pre</button>
                {
                    data && [...Array(10 / limit).keys()].map(item => <button
                        onClick={e => setStart(limit * item)}
                        className='btn btn-sm btn-outline-primary me-2'>
                        {item + 1}
                    </button>)
                }
                <button onClick={e => setStart(start + limit)}>next</button>
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Hero</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <img src={item.hero} height={50} alt="" />
                                </td>
                                <td>
                                    <span class="badge text-bg-primary">{item.role}</span>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </div>
}

export default Users