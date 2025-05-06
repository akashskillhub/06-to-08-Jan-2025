import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../share/handleClasses'
import { useLazySigninQuery, useSigninQuery } from '../redux/auth.api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess, data }] = useLazySigninQuery()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            if (data.length === 0) {
                toast.error("invalid credentials")
            } else {
                localStorage.setItem("AUTH", JSON.stringify(data))
                toast.success("login success")
                navigate("/blog")
            }
        }
    }, [isSuccess])
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">

                                <div class="mt-2">
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        type="email"
                                        className={handleClasses(formik, "email")}
                                        {...formik.getFieldProps("email")}
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={handleClasses(formik, "password")}
                                        {...formik.getFieldProps("password")}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login