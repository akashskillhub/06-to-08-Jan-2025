import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <div> <Link to="/">login</Link>  </div>
        <div> <Link to="/register">register</Link>  </div>
        <div> <Link to="/dashboard">dashboard</Link>  </div>
    </>
}

export default Navbar