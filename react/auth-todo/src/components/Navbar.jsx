import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../App'
import { toast } from 'react-toastify'

const Navbar = () => {
    // Protected / Private pages
    const { user, setUser } = useContext(Auth)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("auth-todo")
        setUser(null)
        toast.success("logout success")
        navigate("/login")
    }
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/" class="navbar-brand">Auth Todo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {
                            user
                                ? <Link to="/admin" class="nav-link active">Dashboard</Link>
                                : <>
                                    <Link to="/" class="nav-link active">Home</Link>
                                    <Link to="/login" class="nav-link">Login</Link>
                                    <Link to="/register" class="nav-link">Register</Link>
                                </>
                        }

                    </div>
                </div>
                {
                    user && <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            welcome {user.name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><button onClick={logout} class="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    </>
}

export default Navbar