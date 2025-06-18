import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from "clsx"
import { Link, useNavigate } from "react-router-dom"
import { useSigninMutation, useSignupMutation } from '../redux/auth.api'
import { useEffect } from 'react'
const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess }] = useSigninMutation()
    const formik = useFormik({
        initialValues: {
            // name: "",
            email: "",
            // mobile: "",
            password: "",
            // cpassword: "",
        },
        validationSchema: yup.object({
            // name: yup.string().required(),
            email: yup.string().required().email(),
            // mobile: yup.string().required(),
            password: yup.string().required(),
            // cpassword: yup.string().required().oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            signin(values)
            resetForm()
        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    useEffect(() => {
        if (isSuccess) {
            navigate("/account")
        }
    }, [isSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signin</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">

                                <div className="mt-2">
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        {...formik.getFieldProps("email")}
                                        className={handleClasses("email")}
                                        type="text"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                </div>

                                <div className="mt-2">
                                    <label for="password" className="form-label">Password</label>
                                    <input
                                        {...formik.getFieldProps("password")}
                                        className={handleClasses("password")}
                                        type="text"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    SignIn
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <Link to="/register" >Register</Link>
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