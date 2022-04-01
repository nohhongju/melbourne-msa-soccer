import React, { useState } from "react";

export default function Bmi(){
    const [inputs,setInputs] = useState({})
    const [result,setResult] = useState('')
    const {name, weight, height} = inputs;
    
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
            
    }
    const handleClick = (e) => {
        e.preventDefault()
        const Request = {name, weight, height}
        alert(`데이터셋 출력 : ${JSON.stringify(Request)}`)
        setResult ((weight)/((height)*(height))*10000)
    }
   
    return <>
        <form>
        <h1>Bmi</h1>
        <div>
            <label htmlFor=""><b>Name </b></label>
            <input type="text" name="name" onChange={handleChange} /><br />
            <label htmlFor=""><b>Height </b></label>
            <input type="text" name="height" onChange={handleChange} /><br />
            <label htmlFor=""><b>Weight </b></label>
            <input type="text" name="weight" onChange={handleChange} /><br />
            <button onClick={handleClick} >BMI 체크</button>
        </div>
        </form>
        <div>결과 : {result}</div>
    </>
}