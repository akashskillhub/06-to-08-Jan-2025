import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-warning navbar-light">
            <div class="container">
                <Link to="/admin" class="navbar-brand" >Admin-Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">User</Link>
                        <Link to="/admin/todo" class="nav-link">Todo</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar