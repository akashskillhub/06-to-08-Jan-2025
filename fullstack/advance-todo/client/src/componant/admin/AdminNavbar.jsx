import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAdminlogoutMutation } from '../../redux/Api/auth.api'

const AdminNavbar = () => {
    const [logout] = useAdminlogoutMutation()
    const { admin } = useSelector(state => state.auth)
    return <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <Link to="/admin" class="navbar-brand" >Admin-Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">User</Link>
                        <Link to="/admin/todo" class="nav-link">Todo</Link>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                {admin.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" >Action</a></li>
                                <li><a class="dropdown-item" >Another action</a></li>
                                <li><button onClick={logout} class="dropdown-item text-danger">Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar