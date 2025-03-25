import React from 'react'

const Learn_Props = () => {
    return <>
        <div>Learn_Props</div>
        <hr />

        {/* 👇 function call */}

        <Child abc="apple" data="ross">
            <h1>hello props</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </Child>

        {/* <Child /> */}
    </>
}
export default Learn_Props

const Child = ({ abc, data, children }) => {
    return <>
        <h1>child</h1>
        <h1>{abc} {data}</h1>
        {children}
    </>
}