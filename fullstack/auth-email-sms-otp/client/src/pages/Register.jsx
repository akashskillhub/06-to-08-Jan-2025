import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import handleClasses from '../utils/handleClasses'
import { useSignupMutation } from '../redux/auth.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'

const Register = () => {
    const [signup, { isSuccess, isLoading, isError, error }] = useSignupMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            mobile: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            signup(values)
            resetForm()
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("register success")
            navigate("/")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error(error.data ? error.data.message : "unable to register")
        }
    }, [isError])

    if (isLoading) {
        return <Loading />
    }

    return <div className="container">
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
                                    type="text"
                                    className={handleClasses(formik, "name")}
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
                                    type="text"
                                    className={handleClasses(formik, "email")}
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            </div>
                            <div className="mt-2">
                                <label for="mobile" className="form-label">mobile</label>
                                <input
                                    {...formik.getFieldProps("mobile")}
                                    type="number"
                                    className={handleClasses(formik, "mobile")}
                                    id="mobile"
                                    placeholder="Enter Your mobile"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">{formik.errors.mobile}</div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p className="text-center mt-3">
                                Already Have Account? <Link to="/">Login</Link>
                            </p>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    </div>
}

export default Register