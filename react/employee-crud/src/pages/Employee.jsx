import { useFormik } from 'formik'
import * as yup from 'yup'

const Employee = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            doj: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            mobile: yup.string().required(),
            doj: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <input type="number" placeholder='mobile' />
            <input type="date" placeholder='date of joining' />
            <button type='submit'>add</button>
        </form>
    </>
}

export default Employee