import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
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
        </div>
    </nav>
}

export default UserNavbar