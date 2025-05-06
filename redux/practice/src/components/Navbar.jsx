import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <Link to="/">home</Link>
        <Link to="/account">account</Link>
        <Link to="/counter">counter</Link>
    </>
}

export default Navbar