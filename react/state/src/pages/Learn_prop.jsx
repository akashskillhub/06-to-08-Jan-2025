import React from 'react'

const Learn_Prop = () => {
    const arr = ["dell", "hp"]
    return <>
        <div>Learn_Prop</div>
        <hr />
        <Demo data={arr}></Demo>
    </>
}

const Demo = ({ data }) => {
    return <>
        <h1>demo</h1>
        <hr />
        <Test brands={data}></Test>
    </>
}

const Test = ({ brands }) => {
    return <>
        <h1>test</h1>
        <h1>{brands}</h1>
    </>
}


export default Learn_Prop