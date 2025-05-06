import { useFormik } from 'formik'
import * as yup from 'yup'
import clsx from "clsx"

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(3)
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    // const x = clsx({
    //     "form-control my-2": true,
    //     demo: true,
    // })
    // console.log(x)

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-valid": formik.touched[key] && !formik.errors[key],
        "is-invalid": formik.touched[key] && formik.errors[key],
    })
    return <>
        {/* <pre>{JSON.stringify(formik.errors, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(formik.touched, null, 2)}</pre> */}
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        className={handleClasses("email")}
                        type="text"
                        {...formik.getFieldProps("email")} />
                    <span className='invalid-feedback'>{formik.errors.email}</span>
                </div>

                <div>
                    <input
                        className={handleClasses("password")}
                        type="password"
                        {...formik.getFieldProps("password")} />
                    <span className='invalid-feedback'>{formik.errors.password}</span>
                </div>
                <button type='submit'>login</button>
            </form>
        </div>
    </>
}

export default Login