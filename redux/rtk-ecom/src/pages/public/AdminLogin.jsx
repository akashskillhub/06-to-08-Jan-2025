import { useFormik } from 'formik'
import *as yup from 'yup'
import handleClasses from '../../share/handleClasses'
import { useLazyLoginAdminQuery, useLazyLoginUserQuery } from '../../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, data, reset }] = useLazyLoginAdminQuery()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            if (data.length === 0) {
                toast.error("invalid credentials")
                reset()
            } else {
                toast.success("login success")
                navigate("/admin")
            }
        }
    }, [isSuccess])
    return <div class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header bg-primary text-light">Admin Login</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card-body">
                            <div>
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="email"
                                    className={handleClasses(formik, "email")}
                                    {...formik.getFieldProps("email")}
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.email}.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="password"
                                    className={handleClasses(formik, "password")}
                                    {...formik.getFieldProps("password")}
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">{formik.errors.password}.</div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p class="text-center mt-3">
                                Dont Have Account? <a href="#">Create Account</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default AdminLogin