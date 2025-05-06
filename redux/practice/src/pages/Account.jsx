import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, widrawMoney } from '../redux/actions/accountActions'
// import { depositMoney, widrawMoney } from '../redux/store'

const Account = () => {
    const { balance } = useSelector(state => state.account)
    const callAction = useDispatch()
    const [amount, setAmount] = useState(0)
    return <div>
        <h1>Account Balance is {balance}</h1>
        <input type="number" onChange={e => setAmount(+e.target.value)} />
        <button onClick={e => callAction(widrawMoney(amount))}>widraw</button>
        <button onClick={e => callAction(depositMoney(amount))}>deposit</button>
    </div>
}

export default Account