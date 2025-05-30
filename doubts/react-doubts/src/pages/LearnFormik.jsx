import clsx from "clsx"
import { useFormik } from "formik"
import * as yup from "yup"
import {
    useAddEmployeeMutation,
    useDeleteEmployeeMutation,
    useGetEmployeesQuery,
    useUdpateEmployeeMutation
} from "../redux/employee.api"
import { useState } from "react"

const LearnFormik = () => {
    const [selectedEmployee, setSelectedEmployee] = useState()
    const { data } = useGetEmployeesQuery()
    const [addEmployee] = useAddEmployeeMutation()
    const [removeEmployee] = useDeleteEmployeeMutation()
    const [updateemployee] = useUdpateEmployeeMutation()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedEmployee ? selectedEmployee.name : "",
            email: selectedEmployee ? selectedEmployee.email : "",
            role: selectedEmployee ? selectedEmployee.role : "",
            salary: selectedEmployee ? selectedEmployee.salary : "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            role: yup.string().required(),
            salary: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedEmployee) {
                updateemployee({ ...values, id: selectedEmployee.id })
                setSelectedEmployee(null)
            } else {
                addEmployee(values)
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
        <Center title="Employee Registration">
            <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
            <form onSubmit={formik.handleSubmit}>
                <input className={handleClasses("name")} {...formik.getFieldProps("name")} placeholder="name" type="text" />
                <input className={handleClasses("email")} {...formik.getFieldProps("email")} placeholder="email" type="email" />
                <input className={handleClasses("role")} {...formik.getFieldProps("role")} placeholder="role" type="text" />
                <input className={handleClasses("salary")} {...formik.getFieldProps("salary")} placeholder="salary" type="number" />
                {
                    selectedEmployee
                        ? <>
                            <button type="submit">update</button>
                            <button onClick={e => setSelectedEmployee(null)} type="button">cancel</button>
                        </>
                        : <button type="submit">add</button>
                }

            </form>
        </Center>
        <div className="container">
            {
                data && <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>salary</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <button onClick={e => setSelectedEmployee(item)}>edit</button>
                                    <button onClick={e => removeEmployee(item.id)}>remove</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    </>
}
// .container>.row>.col-sm-6.offset-sm-3>.card>.card-header+.card-body
const Center = ({ children, title }) => {
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">{title}</div>
                    <div class="card-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LearnFormik