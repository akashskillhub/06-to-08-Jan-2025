import axios from 'axios'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState()
    const [allMenu, setAllMenu] = useState([])
    const API = axios.create({ baseURL: "http://localhost:5000/menu" })

    // CRUD
    const createMenu = async () => {
        await API.post("/", formik.values)
        console.log("create success")
        readMenu()
    }
    const readMenu = async () => {
        const { data } = await API.get("/")
        setAllMenu(data)
    }
    const deleteMenu = async id => {
        await API.delete("/" + id)
        readMenu()
    }
    const updateMenu = async () => {
        await API.patch("/" + selectedMenu.id, formik.values)
        readMenu()
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedMenu ? selectedMenu.name : "",
            price: selectedMenu ? selectedMenu.price : "",
            hero: selectedMenu ? selectedMenu.hero : "",
            desc: selectedMenu ? selectedMenu.desc : ""
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            price: yup.string().required(),
            hero: yup.string().required(),
            desc: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedMenu) {
                // update
                updateMenu()
                setSelectedMenu(null)
            } else {
                createMenu()
            }
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })

    useEffect(() => {
        readMenu()
    }, [])
    return <>
        <form onSubmit={formik.handleSubmit} >
            <input className={handleClasses("name")} {...formik.getFieldProps("name")} type="text" placeholder='name' />
            <input className={handleClasses("price")} {...formik.getFieldProps("price")} type="text" placeholder='price' />
            <input className={handleClasses("hero")} {...formik.getFieldProps("hero")} type="text" placeholder='hero' />
            <textarea className={handleClasses("desc")} {...formik.getFieldProps("desc")} placeholder='desc'></textarea>
            {
                selectedMenu
                    ? <button className='btn btn-warning' type='submit'>update</button>
                    : <button className='btn btn-primary' type='submit'>add</button>
            }
        </form>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>hero</th>
                    <th>desc</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allMenu.map(item => <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td> <img src={item.hero} height={50} alt="" /> </td>
                        <td>{item.desc}</td>
                        <td>
                            <button onClick={e => setSelectedMenu(item)}>edit</button>
                            <button onClick={e => deleteMenu(item.id)}>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Menu