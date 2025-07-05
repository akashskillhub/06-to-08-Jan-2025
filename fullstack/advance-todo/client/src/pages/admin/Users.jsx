import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../../share/handleClasses'
import { useState } from 'react'
import { useUserregisterMutation } from '../../redux/Api/auth.api'
import Loading from '../../share/Loading'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useCallback } from 'react'

const Users = () => {
    const [register, {
        isSuccess: registerSuccess,
        isLoading: registerIsLoading
    }] = useUserregisterMutation()
    const [preview, setPreview] = useState()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            photo: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            photo: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("email", values.email)
            fd.append("photo", values.photo)
            register(fd)
            resetForm()
        }
    })


    const handleChange = useCallback(e => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        formik.setFieldValue("photo", e.target.files[0])
    }, [])
    useEffect(() => {
        if (registerSuccess) {
            toast.success("user create success")
            setPreview(null)
        }
    }, [registerSuccess])

    if (registerIsLoading) {
        return <Loading />
    }
    return <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <form onSubmit={formik.handleSubmit}>
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label">First name</label>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "name")}
                                    {...formik.getFieldProps("name")}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="photo" class="form-label">photo</label>
                                <input
                                    type="file"
                                    onChange={handleChange}
                                    className={handleClasses(formik, "photo")}
                                    id="photo"
                                    placeholder="Enter Your photo"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.photo}</div>
                            </div>
                            {
                                preview && <div>
                                    <img src={preview} height={100} alt="" />
                                </div>
                            }

                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Signup
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default Users