import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../App'

const Navbar = () => {
    const { user, setUser } = useContext(Auth)
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Storage</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active">Home</Link>
                        <Link to="/local" className="nav-link active">Local</Link>
                        <Link to="/signin" className="nav-link active">Signin</Link>
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
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    </>
}

export default Navbar