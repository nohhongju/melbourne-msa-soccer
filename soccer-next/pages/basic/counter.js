import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import style from "styles/basic/counter.module.css";


export default function Counter (){
    const count = useSelector(selectCount)
    const dispath = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('0')
    const incrementValue = Number(incrementAmount) || 0

    return (
    <>
    <button onClick={()=>{setCount (count + 1)}}>+</button><br />
    <button onClick={()=>{setCount (count - 1)}}>-</button><br />
    <div>{count}</div>
    </>
    )
}