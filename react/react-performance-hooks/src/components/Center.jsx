import React from 'react'

const Center = ({ children }) => {
    return <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                {children}
            </div>
        </div>
    </div>
}

export default Center