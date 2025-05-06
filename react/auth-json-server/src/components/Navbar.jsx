import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Skillhub } from '../App'

const Navbar = () => {
    const { auth } = useContext(Skillhub)
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link class="navbar-brand">Auth</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active">Home</Link>
                        <Link to="/login" class="nav-link">Login</Link>
                        <Link to="/register" class="nav-link">Register</Link>
                        {
                            auth && <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                    welcome {auth[0].name}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}

// localStorage
// sessionStorage
// cookies

export default Navbar