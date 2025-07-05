import React from 'react'

const Loading = () => {
    return <>
        <div className='position-absolute top-0 start-0 vh-100 w-100 d-flex justify-content-center align-items-center z-3'>
            Please Wait ... <div class="spinner-border text-primary"></div>
        </div>
    </>
}

export default Loading