import React, { useEffect } from 'react'
import { useSigninMutation } from '../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [signin, { isSuccess }] = useSigninMutation()
    useEffect(() => {
        if (isSuccess) {
            navigate("/dashboard")
        }
    }, [isSuccess])
    return <>
        <button onClick={e => signin({ email: "john@gmail.com", password: "123" })}>login</button>
    </>
}

export default Login