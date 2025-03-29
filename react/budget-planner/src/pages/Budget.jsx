import React, { useState } from 'react'

const Budget = () => {
    const [log, setLog] = useState({})
    const [history, setHistory] = useState([
        { amount: 50000, category: "salary", type: "credit" },
        { amount: 500, category: "petrol", type: "debit" },
        { amount: 500, category: "pizza", type: "debit" },
        { amount: 15000, category: "rent", type: "credit" },
    ])
    const handleChange = e => {
        const { value, name } = e.target
        console.log(name, value)
        setLog({ ...log, [name]: value })
    }
    const handleAdd = () => {
        setHistory([...history, log])
    }
    return <>
        <input name='amount' onChange={handleChange} type="number" placeholder='Enter Amount' />
        <input name='category' onChange={handleChange} type="text" placeholder='Enter Category' />
        <select name='type' onChange={handleChange} >
            <option value="">choose type</option>
            <option value="debit">debit</option>
            <option value="credit">credit</option>
        </select>
        <button onClick={handleAdd}>add</button>

        <hr />
        <h1>
            balace:
            {
                history
                    .filter(item => item.type === "credit")
                    .reduce((sum, item) => +item.amount + sum, 0)
                -
                history
                    .filter(item => item.type === "debit")
                    .reduce((sum, item) => +item.amount + sum, 0)
            }
        </h1>
        <hr />
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>amount</th>
                        <th>category</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(item => <tr className={item.type === "debit" ? "table-danger" : "table-success"}>
                            {/* <td className={item.type === "debit" ? "text-danger" : "text-success"}>{item.amount}</td> */}
                            <td >{item.amount}</td>
                            <td>{item.category}</td>
                            <td>{item.type}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}
export default Budget