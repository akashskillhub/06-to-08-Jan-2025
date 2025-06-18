import React from 'react'

// Tailwind css - daisy ui / shadcn
// Bootstrap
// Material UI

const Button = ({ children, varient }) => {
    return (
        <button className={`btn btn-${varient}`}>{children}</button>
    )
}

export default Button