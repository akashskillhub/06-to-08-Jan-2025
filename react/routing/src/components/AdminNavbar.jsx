import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <a class="navbar-brand">Admin Panel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">Dashboard</Link>
                        <Link to="/admin/account" class="nav-link">Account</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar