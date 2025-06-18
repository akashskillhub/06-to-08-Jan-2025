import { useFormik } from 'formik'
import * as yup from "yup"
import clsx from "clsx"
import { Link, useNavigate } from "react-router-dom"
import { useSignupMutation } from '../redux/auth.api'
import { useEffect } from 'react'
const Register = () => {
    const navigate = useNavigate()
    const [signup, { isSuccess }] = useSignupMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            mobile: yup.string().required(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            signup(values)
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
            navigate("/")
        }
    }, [isSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="card-body">
                                <div>
                                    <label for="name" className="form-label">First name</label>
                                    <input
                                        {...formik.getFieldProps("name")}
                                        className={handleClasses("name")}
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                </div>
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
                                    <label for="mobile" className="form-label">Enter mobile</label>
                                    <input
                                        {...formik.getFieldProps("mobile")}
                                        className={handleClasses("mobile")}
                                        type="number"
                                        id="mobile"
                                        placeholder="Enter Your mobile"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.mobile}</div>
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
                                <div className="mt-2">
                                    <label for="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        {...formik.getFieldProps("cpassword")}
                                        className={handleClasses("cpassword")}
                                        type="text"
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        {formik.errors.cpassword}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <Link to="/" >Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register