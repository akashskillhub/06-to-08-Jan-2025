import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../redux/slices/auth.slice'

const UserNavbar = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <nav class="navbar navbar-expand-lg bg-success navbar-dark">
        <div class="container">
            <Link to="/user" class="navbar-brand">User Panel</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/user" class="nav-link active">Order History</Link>
                </div>
            </div>
            {
                user && <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Welcome {user.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><button onClick={e => dispatch(userLogout())} class="dropdown-item text-danger">Logout</button></li>
                    </ul>
                </div>
            }
        </div>
    </nav>
}

export default UserNavbar