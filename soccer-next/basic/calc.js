import React, { useState } from "react";


export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, num2, opcode} = inputs;
    const [result, setResult] = useState('')

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const Request = {num1, num2, opcode}
        alert(`데이터셋 출력 : ${JSON.stringify(Request)}`)
    }

    return <>
        <form>
        <h1>Calc</h1>
            <label htmlFor=""><b>Num1 </b></label>
            <input type="text" name="num1" onChange={handleChange}/><br />
            <label htmlFor=""><b>Opcode </b></label>
            <select name="opcode" id=""onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            </select>
            <br />
            <label htmlFor=""><b>Num2 </b></label>
            <input type="text" name="num2" onChange={handleChange}/><br />
            <button onClick={handleClick}>계산하기</button>
        </form>
            <div>결과 : {num1} {opcode} {num2} = {result}</div>
    </>
} 