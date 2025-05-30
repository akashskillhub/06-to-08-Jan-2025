import React from 'react'
import useDynamicForm from '../hook/useDynamicForm'

const Login = () => {
    const result = useDynamicForm([
        { name: "email", type: "email" },
        { name: "password", type: "password" },
        { name: "mobile", type: "number" },
        { name: "dob", type: "date" },
        { name: "address", type: "textarea" },
        { name: "photo", type: "file" },
        { name: "city", type: "select", op: ["london", "delhi", "pune"] },

        { name: "gender", type: "radio", op: ["male", "female"] },
        { name: "skills", type: "checkbox", op: ["html", "css", "js", "react"] },
    ])
    return result
}

export default Login