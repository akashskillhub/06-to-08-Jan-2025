import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUserlogoutMutation } from '../../redux/Api/auth.api'

const UserNavbar = () => {
    const { user } = useSelector(state => state.auth)
    const [logout] = useUserlogoutMutation()
    return <>
        <nav class="navbar navbar-expand-lg bg-success navbar-dark">
            <div class="container">
                <Link to="/account" class="navbar-brand" >{user.name}'s Account</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <button onClick={logout} type="button" class="btn btn-danger">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default UserNavbar