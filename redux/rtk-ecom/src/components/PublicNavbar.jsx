import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    const { cart } = useSelector(state => state.public)
    return <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
        <div class="container">
            <Link to="/" class="navbar-brand">Flipkart - Lite</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-link active">Home</Link>
                    <Link to="/login" class="nav-link">Login</Link>
                    <Link to="/register" class="nav-link">Register</Link>
                    <Link to="/admin-login" class="nav-link">Admin login</Link>
                </div>
            </div>
            <Link to="/cart" type="button" class="btn btn-light">
                <span class="badge text-bg-primary me-2">{cart.length}</span>
                <i className="bi bi-cart"></i>
            </Link>
        </div>
    </nav>
}

export default PublicNavbar