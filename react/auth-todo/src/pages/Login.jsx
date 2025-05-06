import { useFormik } from 'formik'
import * as yup from 'yup'
import { handleClasses } from '../utils/handleClasses'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useContext } from 'react'
import { Auth } from '../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { user, setUser } = useContext(Auth)
    const navigate = useNavigate()
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
            try {
                const { data } = await axios.get(" http://localhost:5000/users", { params: values })
                if (data.length === 0) {
                    toast.error("invalid credentials")
                } else {
                    toast.success("login success")
                    setUser(data[0])
                    localStorage.setItem("auth-todo", JSON.stringify(data[0]))
                    navigate("/admin")
                }
                resetForm()
            } catch (error) {
                toast.error(error.message || "unable to process")
            }
        }
    })
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