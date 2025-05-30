import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, demo, inc } from '../redux/count.slice'

const LearnRedux = () => {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return <>
        <h1>{count}</h1>
        <div>LearnRedux</div>
        <button onClick={e => dispatch(demo(10))}>click me</button>
        <hr />
        <button onClick={e => dispatch(inc())}>+1</button>
        <button onClick={e => dispatch(dec())}>-1</button>
    </>

}

export default LearnRedux