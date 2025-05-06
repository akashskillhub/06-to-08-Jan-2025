import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './redux/countSlice'

const App = () => {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return <>
    <h1>{count}</h1>
    <button onClick={e => dispatch(dec())}>-1</button>
    <button onClick={e => dispatch(inc())}>+1</button>
  </>
}

export default App