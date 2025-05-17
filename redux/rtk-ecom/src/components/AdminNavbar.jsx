import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { adminLogout } from '../redux/slices/auth.slice'

const AdminNavbar = () => {
    const dispatch = useDispatch()
    const { admin } = useSelector(state => state.auth)
    return <nav class="navbar navbar-expand-lg bg-danger">
        <div class="container">
            <Link to="/admin" class="navbar-brand">Admin Panel</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/admin" class="nav-link active">Products</Link>
                    <Link to="/admin/users" class="nav-link">Users</Link>
                    <Link to="/admin/orders" class="nav-link">Orders</Link>
                </div>
            </div>
            {
                admin && <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        welcome {admin.name}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><button onClick={e => dispatch(adminLogout())} class="dropdown-item text-danger">Logout</button></li>
                    </ul>
                </div>
            }
        </div>
    </nav>
}

export default AdminNavbar