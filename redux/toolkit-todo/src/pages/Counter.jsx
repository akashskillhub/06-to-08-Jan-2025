import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../redux/slices/counterSlice'

const Counter = () => {
    //      👇 from slice                         👇 from store
    const { count } = useSelector(state => state.kahipn)
    const dispatch = useDispatch()
    return <>
        <div className="container">
            <button onClick={e => dispatch(dec())} type="button" class="btn btn-outline-danger">-1</button>
            <h1>{count}</h1>
            <button onClick={e => dispatch(inc())} type="button" class="btn btn-outline-success">+1</button>
        </div>
    </>
}

export default Counter