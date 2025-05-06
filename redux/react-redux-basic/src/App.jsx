import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { depositMoney, widrawMoney } from './redux/store'

const App = () => {
  const { balance } = useSelector(state => state.skillhub) // 👈 same as getState()
  const callAction = useDispatch() //👈 same as store.dispatch()

  return <>
    <h1>{balance}</h1>
    <button onClick={e => callAction(widrawMoney())}>widraw money</button>
    <button onClick={e => callAction(depositMoney())}>deposit money</button>
  </>
}
// flux 

export default App