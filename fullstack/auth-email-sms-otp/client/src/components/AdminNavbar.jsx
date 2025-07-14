
const AdminNavbar = () => {

    return <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
            <a className="navbar-brand">Admin Panel</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome admin
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item">Action</a></li>
                            <li><a className="dropdown-item">Another action</a></li>
                            <li><button className="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default AdminNavbar