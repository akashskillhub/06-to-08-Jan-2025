import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useContext } from 'react'
import * as yup from 'yup'
import { Auth } from '../App'

const Signin = () => {
    const { user, setUser } = useContext(Auth)
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
            const { data } = await axios.get("http://localhost:5000/user", { params: values })
            if (data.length === 0) {
                console.log("invalid credentials")
            } else {
                localStorage.setItem("auth", JSON.stringify(data[0]))
                setUser(data[0])
                console.log("login success")
            }
            resetForm()
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
                        <div class="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit}>

                            <div class="card-body">
                                <div>
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
                                        type="password"
                                        className={handleClasses("password")}
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
                                    Dont Have Account? <a href="#">Create Account</a>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Signin