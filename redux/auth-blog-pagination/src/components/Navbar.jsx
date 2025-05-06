import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { user } = useSelector(state => state.skillhub)
    return <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
        <div class="container">
            <Link to="/" class="navbar-brand">Blog App</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/" class="nav-link active">Home</Link>
                    {
                        user
                            ? <>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                        {user[0].name}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </>
                            : <>
                                <Link to="/login" class="nav-link">Login</Link>
                                <Link to="/register" class="nav-link">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar