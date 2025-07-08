import { useFormik } from 'formik'
import * as yup from "yup"
import { handleClasses } from '../../share/handleClasses'
import { Link, useNavigate } from 'react-router-dom'
import { useUserloginMutation } from '../../redux/Api/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Loading from '../../share/Loading'
const UserLogin = () => {
    const navigate = useNavigate()
    const [login, { isSuccess, isLoading, isError, error }] = useUserloginMutation()
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
            login(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("user login success")
            navigate("/account")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error(error.data.message ? error.data.message : "unable to login")
            // console.log(error)
        }
    }, [isError])
    if (isLoading) {
        return <Loading />
    }
    return <>
        <div class="container ">
            <div class="row">
                <div class="col-sm-6 offset-sm-3 ">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card border-primary">
                            <div class="card-header">User Login</div>
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        type="text"
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
                                    <Link to="/" >Admin Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default UserLogin