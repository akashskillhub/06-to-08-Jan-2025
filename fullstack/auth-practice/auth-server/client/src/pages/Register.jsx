import React, { useEffect } from 'react'
import { useSignupMutation } from '../redux/apis/auth.api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [signup, { isSuccess }] = useSignupMutation()
    useEffect(() => {
        if (isSuccess) {
            navigate("/")
        }
    }, [isSuccess])
    return <>
        <button onClick={e => signup({ name: "joe", email: "joe@gmail.com", password: "123" })}>register</button>
    </>
}

export default Register