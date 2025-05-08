import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
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
        </div>
    </nav>
}

export default AdminNavbar