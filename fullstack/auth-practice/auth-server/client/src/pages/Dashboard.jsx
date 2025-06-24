import React from 'react'
import { useSignoutMutation } from '../redux/apis/auth.api'

const Dashboard = () => {
    const [signout] = useSignoutMutation()
    return <>
        <div>Dashboard</div>
        <button onClick={signout}>logout</button>
    </>

}

export default Dashboard