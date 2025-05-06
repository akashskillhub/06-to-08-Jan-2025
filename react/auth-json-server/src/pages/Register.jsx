import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

const Register = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            cpassword: yup.string().required().oneOf([yup.ref("password")]),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post("http://localhost:5000/user", values)
                console.log("user register success")
                resetForm()
                navigate("/login")
            } catch (error) {
                console.log(error)
            }


        }
    })
    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">First name</label>
                                    <input
                                        type="text"
                                        className={handleClasses("name")}
                                        {...formik.getFieldProps("name")}
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.name}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        type="text"
                                        className={handleClasses("email")}
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
                                        type="text"
                                        className={handleClasses("password")}
                                        {...formik.getFieldProps("password")}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="cpassword" class="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        type="text"
                                        className={handleClasses("cpassword")}
                                        {...formik.getFieldProps("cpassword")}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">
                                        {formik.errors.cpassword}
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
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

export default Register