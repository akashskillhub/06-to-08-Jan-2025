import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from 'clsx'
import { useAddUserMutation, useGetUsersQuery, useUpdateUserMutation } from '../redux/user.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useDeleteUserMutation } from '../../../client/src/redux/user.api'
import { useState } from 'react'

const User = () => {
    const [show, setShow] = useState(false)
    const [selectedUser, setSelectedUser] = useState()
    const [modify, { isSuccess: modifySuccess, isLoading: modifyIsLoading }] = useUpdateUserMutation()
    const [deleteUser, { isSuccess: deleteSuccess, isLoading: deleteIsLoading }] = useDeleteUserMutation()
    const { data } = useGetUsersQuery()
    const [addUser, { isSuccess, isLoading }] = useAddUserMutation()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedUser ? selectedUser.name : "",
            email: selectedUser ? selectedUser.email : "",
            photo: selectedUser ? selectedUser.profile : "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            photo: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("email", values.email)
            fd.append("photo", values.photo)
            if (selectedUser) {
                modify({ _id: selectedUser._id, fd })
            } else {
                addUser(fd)
            }
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const handleChange = e => {
        console.log(e.target.files[0])
        formik.setFieldValue("photo", e.target.files[0])
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("user create success")
        }
    }, [isSuccess])

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("user delete success")
        }
    }, [deleteSuccess])

    useEffect(() => {
        if (modifySuccess) {
            toast.success("user modify success")
            setSelectedUser(null)
        }
    }, [modifySuccess])

    if (isLoading || deleteIsLoading || modifyIsLoading) {
        return <div>
            Please Wait ... <div class="spinner-border text-primary"></div>
        </div>
    }

    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Practice Cloudinary Image Upload</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div>
                                    <input type="text" {...formik.getFieldProps("name")} className={handleClasses("name")} />
                                    <span className="invalid-feedback">{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input type="email" {...formik.getFieldProps("email")} className={handleClasses("email")} />
                                    <span className="invalid-feedback">{formik.errors.email}</span>
                                </div>

                                {
                                    selectedUser && !show
                                        ? <div>
                                            <img src={selectedUser.profile} height={50} alt="" />
                                            <button onClick={e => setShow(true)} type='button'>change image</button>
                                        </div>
                                        : <div>
                                            <input type="file" onChange={handleChange} className={handleClasses("photo")} />
                                            <span className="invalid-feedback">{formik.errors.photo}</span>
                                            {
                                                selectedUser && <button onClick={e => setShow(false)} type='button'>cancel</button>
                                            }

                                        </div>
                                }

                                {/* {
                                    selectedUser
                                        ? show
                                            ? <div>
                                                <input type="file" onChange={handleChange} className={handleClasses("photo")} />
                                                <span className="invalid-feedback">{formik.errors.photo}</span>
                                            </div>
                                            : <div>
                                                <img src={selectedUser.profile} height={50} alt="" />
                                                <button onClick={e => setShow(true)} type='button'>change image</button>
                                            </div>
                                        : <div>
                                            <input type="file" onChange={handleChange} className={handleClasses("photo")} />
                                            <span className="invalid-feedback">{formik.errors.photo}</span>
                                        </div>
                                } */}
                                <hr />
                                {
                                    selectedUser
                                        ? <div>
                                            <button type="submit" class="btn btn-warning">Update</button>
                                            <button onClick={e => setSelectedUser(null)} type="button" class="btn btn-secondary">Cancel</button>
                                        </div>
                                        : <button type="submit" class="btn btn-primary">Add</button>
                                }

                            </div>
                        </form>
                    </div>

                    {
                        data && <table class="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Photo</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.result.map(item => <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <img src={item.profile} height={100} alt="" />
                                        </td>
                                        <td>
                                            <button onClick={e => setSelectedUser(item)} type="button" class="btn btn-warning">edit</button>
                                            <button onClick={e => deleteUser(item._id)} className='btn btn-danger'>delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    </>
}

export default User