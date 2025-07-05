import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { useAddUserMutation, useGetUsersQuery } from '../redux/user.api'
import { useEffect } from 'react'

const Profile = () => {
    const [addUser, { isLoading, isSuccess }] = useAddUserMutation()
    const { data } = useGetUsersQuery()
    const [preview, setPreview] = useState()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            photo: "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required(),
            photo: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            fd.append("name", values.name)
            fd.append("email", values.email)
            fd.append("photo", values.photo)
            addUser(fd)
            resetForm()
        }
    })
    const handleChange = e => {
        formik.setFieldValue("photo", e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
    }
    useEffect(() => {
        if (isSuccess) {
            setPreview(null)
        }
    }, [isSuccess])
    if (isLoading) {
        return <div>Loading please wait ...</div>
    }
    return <>
        <form onSubmit={formik.handleSubmit}>
            <input {...formik.getFieldProps("name")} type="text" placeholder='name' />
            <input {...formik.getFieldProps("email")} type="email" placeholder='email' />
            <input onChange={handleChange} type="file" />
            <img src={preview} alt="" height={100} />
            <button type='submit'>add</button>
        </form>

        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>photo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.result.map(item => <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <img src={item.profile} height={100} alt="" />
                        </td>
                    </tr>)}
                </tbody>

            </table>
        }
    </>
}

export default Profile