import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

const Todo = () => {

    const [notes, setNotes] = useState([])

    const formik = useFormik({
        initialValues: {
            task: "",
            desc: "",
            priority: "",
        },
        validationSchema: yup.object({
            task: yup.string().required(),
            desc: yup.string().required(),
            priority: yup.string().required(),
        }),
        onSubmit: async (values, { resetForm }) => {
            //                  👇API ENDPOINT
            await axios.post("http://localhost:5000/notes", values)
            getAllNotes()
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    const getAllNotes = async () => {
        const { data } = await axios.get("http://localhost:5000/notes")
        setNotes(data)
    }
    const removeNote = async id => {
        await axios.delete("http://localhost:5000/notes/" + id)
        getAllNotes()
    }

    useEffect(() => {
        getAllNotes()
    }, [])

    return <>
        <div className="container">
            <form onSubmit={formik.handleSubmit}>


                <div>
                    <input
                        className={handleClasses("task")}
                        type="text"
                        placeholder='task'
                        {...formik.getFieldProps("task")} />
                    <span className='invalid-feedback'>{formik.errors.task}</span>
                </div>
                <div>
                    <textarea className={handleClasses("desc")} placeholder='enter desc' {...formik.getFieldProps("desc")}></textarea>
                    <span className='invalid-feedback'>{formik.errors.desc}</span>
                </div>
                <div>
                    <select className={handleClasses("priority")} {...formik.getFieldProps("priority")}>
                        <option value="">Choose Priority</option>
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                    </select>
                    <span className='invalid-feedback'>{formik.errors.priority}</span>
                </div>
                <button type='submit'>add</button>
            </form>

            <table className='my-3 table table-bordered'>
                <thead>
                    <tr>
                        <th>task</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes.map(item => <tr>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button onClick={e => removeNote(item.id)}>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Todo