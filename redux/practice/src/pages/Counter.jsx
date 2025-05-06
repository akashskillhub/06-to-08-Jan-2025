import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../redux/actions/counterActions'
// import { dec, inc } from '../redux/store'

const Counter = () => {
    //       👇 counterReducer                    👇 from store.js combineReducers 
    const { count } = useSelector(state => state.counter)

    const callAction = useDispatch()
    return <div>
        <h1>{count}</h1>
        <button onClick={e => callAction(dec())}>-1</button>
        <button onClick={e => callAction(inc())}>+1</button>
    </div>
}

export default Counter