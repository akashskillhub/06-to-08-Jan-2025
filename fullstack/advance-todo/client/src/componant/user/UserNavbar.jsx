import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-success navbar-light">
            <div class="container">
                <Link to="/" class="navbar-brand" href="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default UserNavbar