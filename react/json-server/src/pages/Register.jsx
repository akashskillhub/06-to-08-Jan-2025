import React, { useEffect, useState } from 'react'
import axios from "axios"
/*
 axios.get()         // read
 axios.post()          // create
 axios.patch()        // update
 axios.delete()        // delete
 */
const Register = () => {
    const [allUsers, setAllUsers] = useState([])
    const [user, setUser] = useState({})
    const handleChange = e => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleRegister = async () => {
        try {
            //                                  👇endpoint or url       👇 body
            const result = await axios.post("http://localhost:5000/user", user)
            console.log("register success", result)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/user")
            setAllUsers(data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = async id => {
        try {
            await axios.delete("http://localhost:5000/user/" + id)
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return <>
        <input onChange={handleChange} name='name' type="text" placeholder='enter name' />
        <input onChange={handleChange} name='email' type="email" placeholder='enter email' />
        <input onChange={handleChange} name='mobile' type="number" placeholder='enter mobile' />
        <input onChange={handleChange} name='password' type="password" placeholder='enter password' />
        <select onChange={handleChange} name="gender">
            <option value="">Choose Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <button onClick={handleRegister}>register</button>

        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>mobile</th>
                    <th>gender</th>
                    <th>password</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.gender}</td>
                        <td>{item.password}</td>
                        <td>
                            <button onClick={e => handleDelete(item.id)}>remove</button>
                        </td>
                    </tr>)
                }
                {/* CRUD */}
            </tbody>
        </table>
    </>
}

export default Register