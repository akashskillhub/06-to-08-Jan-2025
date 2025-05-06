import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Register = () => {
    const formik = useFormik({
        initialValues: { name: "", email: "", mobile: "", password: "", },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            mobile: yup.string().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-valid": formik.touched[key] && !formik.errors[key],
        "is-invalid": formik.touched[key] && formik.errors[key],
    })

    return <>
        <div className="container">
            <form onSubmit={formik.handleSubmit}>

                <input className={handleClasses("name")} {...formik.getFieldProps("name")} type="text" />
                <span className="invalid-feedback">{formik.errors.name}</span>

                <input className={handleClasses("email")} {...formik.getFieldProps("email")} type="email" />
                <span className="invalid-feedback">{formik.errors.email}</span>

                <input className={handleClasses("mobile")} {...formik.getFieldProps("mobile")} type="number" />
                <span className="invalid-feedback">{formik.errors.mobile}</span>

                <input className={handleClasses("password")} {...formik.getFieldProps("password")} type="password" />
                <span className="invalid-feedback">{formik.errors.password}</span>

                <button type='submit'>register</button>

            </form>
        </div>
    </>
}

export default Register