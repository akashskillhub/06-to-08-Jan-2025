import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import handleClasses from '../utils/handleClasses'
import { useOtpMutation, useSigninMutation } from '../redux/auth.api'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const [sendOtp, {
        isSuccess: otpSuccess,
        isLoading: otpLoading,
        isError: otpIsError,
        error: otpError
    }] = useOtpMutation()

    const [signin, {
        isSuccess: signinSuccess,
        isError: signinIsError,
        error: signinError,
        isLoading: signinLoading
    }] = useSigninMutation()

    const formik = useFormik({
        initialValues: {
            username: "",
            otp: "",
        },
        validationSchema: yup.object({
            username: yup.string().required(),
            otp: yup.string()
        }),
        onSubmit: (values, { resetForm }) => {
            if (otpSuccess) {
                signin(values)
            } else {
                sendOtp(values)
            }
            // resetForm()
        }
    })

    useEffect(() => {
        if (otpSuccess) {
            toast.success("otp send success")
        }
    }, [otpSuccess])

    useEffect(() => {
        if (otpIsError) {
            toast.error(otpError.data ? otpError.data.message : "unable to send otp")
        }
    }, [otpIsError])


    useEffect(() => {
        if (signinSuccess) {
            toast.success("signin success")
        }
    }, [signinSuccess])

    useEffect(() => {
        if (signinIsError) {
            toast.error(signinError.data ? signinError.data.message : "unable login")
        }
    }, [signinIsError])

    // 2FA


    if (otpLoading || signinLoading) {
        return <Loading />
    }


    return <form onSubmit={formik.handleSubmit}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signin</div>
                        <div className="card-body">
                            {
                                otpSuccess
                                    ? <div className="mt-2">
                                        <label for="otp" className="form-label">otp</label>
                                        <input
                                            {...formik.getFieldProps("otp")}
                                            type="number"
                                            className={handleClasses(formik, "otp")}
                                            id="otp"
                                            placeholder="Enter Your otp"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.otp}</div>
                                    </div>
                                    : <div className="mt-2">
                                        <label for="username" className="form-label">username</label>
                                        <input
                                            {...formik.getFieldProps("username")}
                                            type="text"
                                            className={handleClasses(formik, "username")}
                                            id="username"
                                            placeholder="Enter Your username"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.username}</div>
                                    </div>
                            }





                            <button type="submit" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Don't Have Account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Login